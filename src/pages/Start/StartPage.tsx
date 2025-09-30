import style from './Start.module.css';
import Button from "../../components/ui/Button/Button.tsx";
import Title from "../../components/ui/Title/Title.tsx";
import Input from "../../components/ui/Formik/Input/Input.tsx";
import Select from "../../components/ui/Formik/Select/Select.tsx";
import {Form, Formik, type FormikErrors} from "formik";
import {useNavigate} from "react-router-dom";
import type {GameSettings} from "../../types/gameSettings.ts";
import settingsValidationSchema from "../../validation/settingsValidationSchema.ts";
import useGameSettingsStore from "../../stores/useGameSettingsStore.tsx";

const StartPage = () => {
    const navigate = useNavigate();
    const {settings, setSettings} = useGameSettingsStore();

    const isErrors = (errors: FormikErrors<GameSettings>) => Object.keys(errors).length !== 0
    const onSubmit = (settings: GameSettings) => {
        setSettings(settings)
        navigate("/game");
    }

    return (
        <div className={style.Page}>
            <Title>Start</Title>
            <div className={style.Container}>
                <Formik
                    initialValues={settings}
                    validationSchema={settingsValidationSchema}
                    onSubmit={(settings) => onSubmit(settings)}
                >
                    {({errors}) => (
                        <Form>
                            <Input name="playAnimations" label="Play Animations" type="checkbox" />
                            <Input name="gridRows" label="Grid Rows" type="number" />
                            <Input name="gridCols" label="Grid Columns" type="number" />
                            <Input name="winSize" label="Win Size" type="number" />
                            <Input name="playerName1" label="Player 1 Name" type="text" />
                            <Input name="playerName2" label="Player 2 Name" type="text" />
                            <Select
                                name="initialPlayer"
                                label="Starting Player"
                                options={[
                                    {value: "P1", label: "P1"},
                                    {value: "P2", label: "P2"},
                                ]}
                            />
                            <Button disabled={isErrors(errors)} type="submit">Start Game</Button>
                        </Form>
                    )}
                </Formik>
                <span>
                    Players choose <span className={style.Yellow}>yellow</span> or <span className={style.Red}>red</span> discs.<hr/>
                    They drop the discs into the grid, starting in the middle or at the edge to stack their colored discs upwards, horizontally, or diagonally.<hr/>
                    Use strategy to block opponents while aiming to be the first player to get {settings.winSize} in a row to win.
                </span>
            </div>
        </div>
    );
}

export default StartPage;