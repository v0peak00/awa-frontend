import React from 'react';
import Restaurant from './Restaurant';
import {useStates} from './StatesProvider';

export default function Main() {
    const {page, setPage} = useStates();

    console.log(page)
    return (
        <main>
            <Restaurant />
        </main>
    )
}
