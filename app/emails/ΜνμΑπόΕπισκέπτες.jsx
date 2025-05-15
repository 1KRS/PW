import * as React from 'react';

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

export const ΜνμΑπόΕπισκέπτες = ({
  fullName,
  email,
  number,
  app,
  subject,
  text,
}) => (
  <Html>
    <Head />
    <Preview>{`Νέο μήνυμα από ${fullName}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={subjectStyles}>{`${subject}`}</Text>
        <Hr style={hr} />
        <Text style={name}>{`${fullName}`}</Text>
        <Text style={field}>{`ηΤαχυδρομείο: ${email}`}</Text>
        <Text style={field}>{`Αριθμός Τηλεφώνου: ${number} (για  ${app})`}</Text>
        <Hr style={hr} />
        <Text style={paragraph}>{`${text}`}</Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

export default ΜνμΑπόΕπισκέπτες;

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Play,Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  textAlign: 'center',
};

const name = {
  color: '#00fcfd',
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  lineHeight: '20px',
};
const subjectStyles = {
  color: '#00fcfd',
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: '25px',
};

const field = {
  fontSize: '16px',
  lineHeight: '10px',
};
const paragraph = {
  fontSize: '16px',
  lineHeight: '20px',
};

const btnContainer = {
  textAlign: 'center',
};

const button = {
  backgroundColor: '#00fcfd',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
