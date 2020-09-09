import styled from 'styled-components';
import { CenteredContainer } from '../Common/Common.styles';
import { PersonsList, Photo } from '../primitive/PersonsList';
import { device } from '../Media.styles';

const PersonsListCustom = styled(PersonsList)`
    @media ${device.sm} {
        padding: 0 20%;
    }
`;

export const ExamplePeopleBlock = () => {
    const persons = [
        ["Dave Butcher", "/img/people/dave.jpg", "Does things, goes wild"],
        ["Gray Ushu", "/img/people/ushu.jpg", <><p>Heavy <b>hitter</b></p><p>Tough eater</p></>],
    ];

    return (
        <CenteredContainer>
            <PersonsListCustom>
                {persons.map(([name, photo, description]) => (
                    <li>
                        <div>
                            <Photo>
                                <img src={photo as string} />
                            </Photo>
                        </div>
                        <div>
                            <span>{name}</span>
                            {description}
                        </div>
                    </li>
                ))}
            </PersonsListCustom>
        </CenteredContainer>
    );
}
