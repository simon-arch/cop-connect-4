import {useSettings} from "../hooks/useSettings.tsx";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {bool, number, object} from "yup";

const schema = object().shape({
    playAnimations: bool().required('Play Animations is required'),
    gridRows: number()
        .min(2, 'Grid Rows must be greater than 1')
        .required('Grid Rows is required'),
    gridCols: number()
        .min(2, 'Grid Columns must be greater than 1')
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
});

const SettingsPage = () => {
    const {settings, update} = useSettings();

    return (
        <Formik
            initialValues={{ playAnimations: settings.playAnimations, gridRows: settings.gridRows, gridCols: settings.gridCols, winSize: settings.winSize }}
            validationSchema={schema}
            onSubmit={(values) => {
                update(values);
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label>Play Animations:</label>
                        <Field name="playAnimations" type="checkbox" />
                        <ErrorMessage name="playAnimations" component="div" />
                    </div>
                    <div>
                        <label>Grid Rows:</label>
                        <Field name="gridRows" type="number" />
                        <ErrorMessage name="gridRows" component="div" />
                    </div>
                    <div>
                        <label>Grid Columns:</label>
                        <Field name="gridCols" type="number" />
                        <ErrorMessage name="gridCols" component="div" />
                    </div>
                    <div>
                        <label>Win Size:</label>
                        <Field name="winSize" type="number" />
                        <ErrorMessage name="winSize" component="div" />
                    </div>
                    <button type="submit">Save</button>
                </Form>
            )}
        </Formik>
    );
};

export default SettingsPage;