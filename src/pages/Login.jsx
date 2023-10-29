import { useState } from "react";
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
// import { useMediaQuery } from 'react-responsive'

const Div1 = styled.div({
    width: '1000px', 
    height: '961px',
    flexShrink: '0',
    borderRadius: '12px',
    background: '#FFF',
    boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.16)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'flex-start', 
    //padding: '5% 5% 5% 10%',
    margin: 'auto',
    // marginTop: '5%',
});

const Div2 = styled.div({
    width: '824px', 
    height: '488px',
    flexShrink: '0',
    margin: 'auto',
});


const Input1 = styled.div({
    width: '824px',
    height: '56px',
    flexShrink: '0',
    position: 'relative',
});

const InputField = styled.input({
    width: '824px',
    height: '56px',
    flexShrink: '0',
    borderRadius: '8px',
    border: '1px solid rgba(4, 7, 47, 0.40)',
    fontSize: '20px',
    padding: ' 0 0 0 2%',
    '&:focus': {
        backgroundColor: 'white',
    },
    '&::placeholder': {
        color: 'var(--Light-Color---1, #737B86)',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '110%',
    },
});


const H1 = styled.h1({
    textAlign: 'center',
    color: 'var(--Text-color, #04072F)', 
    fontFamily: 'Poppins',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '110%', /* 52.8px */
});

const H4 = styled.h4({
    color: 'var(--Text-color, #04072F)', 
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '110%',
});


const IconContainer = styled.div({
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
});

const CheckboxLabel = styled.label({
    display: 'flex',
    alignItems: 'center',
    color: 'var(--Light-Color---1, #737B86)',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '110%',
    margin: '8px 0',
});

const CheckboxInput = styled.input({
    marginRight: '5px', 
});

const Link = styled.a({
    textDecoration: 'underline',
    color: 'var(--Secondary---1, #F78719)',
    cursor: 'pointer',
    marginLeft: '8px',
    '&:hover': {
        backgroundColor: '#FFD',
    },
});

const Link1 = styled.a({
    textDecoration: 'underline',
    color: 'var(--Secondary---1, #F78719)',
    cursor: 'pointer',
    marginLeft: '60%',
    '&:hover': {
        backgroundColor: '#FFD',
    },
});



const Button = styled.button({
    width: '538px',
    height: '56px',
    flexShrink: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: '8px',
    background: 'var(--Primary---1, #1575A7)',
    color: 'var(--white-color, #FFF)',
    cursor: 'pointer',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '110%', /* 19.8px */
    '&:hover': {
        backgroundColor: 'orange',
    },
});

const CenteredText = styled.div({
    textAlign: 'center',
    color: '#04072F',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
});

////////////////////////////////////////////////////////////////////////// 


const Login = () => {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }


    return (
        <Div1>
            <Div2>
            <H1>Login</H1>
            <H4>Login ID</H4>
            <Input1>
                <InputField
                    type="text"
                    placeholder="Enter Login ID"
                />
            </Input1>
            <br />
            <H4>Password</H4>
            <Input1>
                <InputField
                    type={type}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <IconContainer onClick={handleToggle}>
                    <Icon icon={icon} size={25} />
                </IconContainer>
            </Input1>
            <br />
            <CheckboxLabel>
                <CheckboxInput type="checkbox" /> Remember me
                <br/>
                <Link1 href="#">Change Password</Link1>
            </CheckboxLabel>
            <CheckboxLabel>
                <CheckboxInput type="checkbox" /> Agree to <Link href="#">Terms & Conditions</Link>
            </CheckboxLabel>
            <br />
            <Button> Login </Button>
            <br />
            <CenteredText>
                Don't have an account? <Link href="#">Register Here</Link>
            </CenteredText>
        </Div2></Div1>
    );
}

export default Login;
