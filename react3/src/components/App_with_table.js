import React from 'react';
import './App.css';
import BigCard from './components/BigCard';
import Skills from './components/Skills';
import Flower from './components/Flower';
import skillsData from './components/data.json';
import { useTable } from "react-table";

function App() {
    const data = React.UseMemo(() => skillsData, []);
    const columns = React.UseMemo(() => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Skill",
            accessor: "skill",
        },
        {
            Header: "Description",
            accessor: "description",
        },
        {
            Header: "Level",
            accessor: "level",
        },
    ],
        []
    );
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    return (
        <div className="App">
            <div className="App-header">
                <div className="container">
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.hetHeaderGroupsProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td{...cell.getCellProps()}> {cell.render("Cell")}</td>
                                        ))}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <BigCard />
                <Flower />

                <Skills />
            </div>
        </div>
    );
}

export default App;

