import { useEffect, useState } from 'react';

interface ColumnProps {
    columnIndex: number;
    dropPiece: (column: number) => void;
    columnData: number[];
}

export function useDropCell({ columnIndex, dropPiece, columnData }: ColumnProps) {

    const [droppingCell, setDroppingCell] = useState<number | null>(null);

    useEffect(() => {
        if (droppingCell !== null) {
            setTimeout(() => setDroppingCell(null), 4000);
        }
    }, [droppingCell]);

    const handleColumnClick = () => {
        const rowIndex = columnData.lastIndexOf(0);
        if (rowIndex !== -1) {
            setDroppingCell(rowIndex);
            dropPiece(columnIndex);
        }
    };

    return {
        handleColumnClick,
        droppingCell
    };
}
