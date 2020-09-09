import { CenteredContainer } from '../Common/Common.styles';
import { Table, CellHint } from '../primitive/Table';

export const ExampleTableBlock = () => {
    const rows = [
        ["Mama's kitchen", "#", "34 22nd Str", "italian", "beverages"],
        ["Slim Bo", "#", "1 20th Str", "chinese", "beverages"],
        ["Underground", "#", "101 5th Ave", "appetizers", "full bar"],
    ];

    return (
        <CenteredContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Venue</th>
                        <th>Address</th>
                        <th>Cuisine</th>
                        <th>Drinks</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(([venue, url, address, cuisine, drinks]) => (
                        <tr>
                            <td><a href={url} target="_blank">{venue}</a></td>
                            <td>{address}</td>
                            <td><CellHint>Cuisine:</CellHint> {cuisine}</td>
                            <td><CellHint>Drinks:</CellHint> {drinks}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </CenteredContainer>
    );
}
