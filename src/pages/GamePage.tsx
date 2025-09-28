import Button from "../components/ui/Button/Button.tsx";
import Title from "../components/ui/Title/Title.tsx";
import Board from "../components/game/Board/Board.tsx";
import GridProvider from "../components/providers/GridProvider.tsx";
import type {CellOwner} from "../types/cellOwner.ts";
import {usePlayer} from "../hooks/usePlayer.tsx";
import Modal from "../components/ui/Modal/Modal.tsx";
import {useState} from "react";

interface GamePageProps {
    onFinish: (winner: CellOwner) => void;
}

const GamePage = (props: GamePageProps) => {
    const [winner, setWinner] = useState<CellOwner | undefined>(undefined);
    const [modalOpen, setModalOpen] = useState(false);
    const {player} = usePlayer();

    const onEnd = (winner: CellOwner) => {
        setWinner(winner);
        setModalOpen(true);
    }

    const title = winner === undefined ? player : winner ? `${winner} Won` : "Tie";

    return (
        <GridProvider onEnd={onEnd}>
            <Title>Page - Game [{title}]</Title>
            <Button onClick={() => props.onFinish(null)}>Finish Game</Button>
            <Board/>
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    End of the game. {title}!
                </Modal>
            )}
        </GridProvider>
    );
};

export default GamePage;
