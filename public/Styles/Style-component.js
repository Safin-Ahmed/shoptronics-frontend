import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 150px;
`;

export const MainFooter = styled.div`
    display: flex;
    @media(max-width:575px) {
            flex-direction: column;

    }
    @media(min-width:576px) and (max-width:767px) {
            flex-direction: column;
    }
    @media(min-width:768px) and (max-width:991px) {
            flex-direction: column;
    }
`;

export const FooterItem = styled.div`
    flex: 1;
`;
export const footerBackground = styled.div`
    background-image: url("../static/footer-background.jpg");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover!important;
    padding:100px 0;
`;
