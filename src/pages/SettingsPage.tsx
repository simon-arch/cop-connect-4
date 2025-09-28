import type {GameSettings} from "../types/gameSettings.ts";
import {useSettings} from "../hooks/useSettings.tsx";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {bool, number, object, string} from "yup";

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
            initialValues={{ playAnimations: settings.playAnimations, gridRows: settings.gridRows, gridCols: settings.gridCols, winSize: settings.winSize, initialPlayer: settings.initialPlayer }}
            validationSchema={schema}
            onSubmit={(values: GameSettings) => {
                update(values);
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label>Play Animations:</label><br/>
                        <Field name="playAnimations" type="checkbox" />
                        <ErrorMessage name="playAnimations" component="div" />
                    </div>
                    <div>
                        <label>Grid Rows:</label><br/>
                        <Field name="gridRows" type="number" />
                        <ErrorMessage name="gridRows" component="div" />
                    </div>
                    <div>
                        <label>Grid Columns:</label><br/>
                        <Field name="gridCols" type="number" />
                        <ErrorMessage name="gridCols" component="div" />
                    </div>
                    <div>
                        <label>Win Size:</label><br/>
                        <Field name="winSize" type="number" />
                        <ErrorMessage name="winSize" component="div" />
                    </div>
                    <div>
                        <label htmlFor="initialPlayer">Starting Player:</label><br/>
                        <Field as="select" name="initialPlayer">
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                        </Field>
                        <ErrorMessage name="initialPlayer" component="div" />
                    </div>
                    <button type="submit">Save</button>
                </Form>
            )}
        </Formik>
    );
};

export default SettingsPage;