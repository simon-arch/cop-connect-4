import {useSettings} from "../hooks/useSettings.tsx";
import {Formik, Form} from "formik";
import {bool, number, object, string} from "yup";
import Button from "../components/ui/Button/Button.tsx";
import Input from "../components/ui/Formik/Input/Input.tsx";
import Select from "../components/ui/Formik/Select/Select.tsx";

const schema = object().shape({
    playAnimations: bool().required('Play Animations is required'),
    gridRows: number()
        .min(2, 'Grid Rows must be greater than 1')
        .max(20, 'Grid Rows must be equal or less than 20')
        .required('Grid Rows is required'),
    gridCols: number()
        .min(2, 'Grid Columns must be greater than 1')
        .max(20, 'Grid Columns must be equal or less than 20')
        .required('Grid Columns is required'),
    winSize: number()
        .min(2, 'Win Size must be greater than 1')
        .required('Win Size is required')
        .test(
            'winSizeCheck',
            'Win Size must be less than Grid Rows or Grid Columns',
            function (value) {
                const { gridRows, gridCols } = this.parent;
                if (value == null) return true;
                return value <= gridRows || value <= gridCols;
            }
        ),
    initialPlayer: string()
        .oneOf(['P1', 'P2'], 'Select either P1 or P2')
        .required('Initial Player is required'),
});

const SettingsPage = () => {
    const {settings, update} = useSettings();

    return (
        <Formik
            initialValues={settings}
            validationSchema={schema}
            onSubmit={(settings) => update(settings)}
        >
            {() => (
                <Form>
                    <Input name="playAnimations" label="Play Animations" type="checkbox" />
                    <Input name="gridRows" label="Grid Rows" type="number" />
                    <Input name="gridCols" label="Grid Columns" type="number" />
                    <Input name="winSize" label="Win Size" type="number" />
                    <Select
                        name="initialPlayer"
                        label="Starting Player"
                        options={[
                            {value: "P1", label: "P1"},
                            {value: "P2", label: "P2"},
                        ]}
                    />
                    <Button type="submit">Save</Button>
                </Form>
            )}
        </Formik>
    );
};

export default SettingsPage;