import styled from 'styled-components';
import { InvertedCenteredContainer, Form, FormSuccessCss, FormSuccess } from '../Common/Common.styles';
import { emailaddress } from '../../constants/constants';

const Container = styled(InvertedCenteredContainer)`
    ${FormSuccessCss};
`;

export const ExampleForm = () => {
    return (
        <Container>
            <h3>Any questions? Ask us!</h3>
            <Form id="emailform">
                {/* see init.js for form handling js */}
                <input type='text' required name='company' placeholder='company name' />
                <input type='text' required name='firstname' placeholder='your name' />
                <input type='email' required name='email' placeholder='your email' />
                <input type='text' name='phone' placeholder='your phone' />
                <input type='submit' value="send" />
            </Form>
            <p>You can also reach us through <a href={`mailto:${emailaddress}`}>{emailaddress}</a></p>
            <FormSuccess>
                <h3>Thank you!</h3>
                <p><i>We will get back to you ASAP!</i></p>
                <p>You can also reach us through <a href={`mailto:${emailaddress}`}>{emailaddress}</a></p>
            </FormSuccess>
        </Container>
    );
}