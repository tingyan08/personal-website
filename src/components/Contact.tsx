import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            backgroundColor: 'white', // Added white background
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            '& .MuiInputBase-input': {
              color: 'black', // Added text color
              backgroundColor: 'white', // Added input background
            },
            '& .MuiFormHelperText-root.Mui-error': {
              backgroundColor: '#white',
              padding: '4px 8px', // Adding some padding for better appearance
              margin: '-2px 0 0 0', // Adjusting margin
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: 'white', // Added white background
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          input: {
            color: 'black', // Added text color
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: 'white', // Added white background
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            backgroundColor: 'white', // Added white background
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
          input: {
            color: 'black', // Added text color
          },
        },
      },
    },
  });




function Contact() {

  const service_id = "service_2kso8kr"
  const template_id = "template_i35spxe"
  const public_key = "RKWsqxHu1sjwu_3rS"

  const outerTheme = useTheme();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);


  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  // Handle snackbar close
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    if (name !== '' && email !== '' && message !== '') {
      var templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log(templateParams);
      emailjs.send(service_id, template_id, templateParams, public_key).then(
        (response: { status: any; text: any; }) => {
          console.log('SUCCESS!', response.status, response.text);
          setSnackbarMessage('Message sent successfully!');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
          
          // Clear form
          setName('');
          setEmail('');
          setMessage('');
        },
        (error: any) => {
          console.log('FAILED...', error);
            setSnackbarMessage('Failed to send message. Please try again.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <h1>Contact Me</h1>
        <p>Any Questions? Please Feel Free To Contact Me!!</p>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2,
          }}
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField 
              required
              id='textfield'
              label="Your Name" 
              variant="filled" 
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={nameError}
              helperText={nameError ? "Please enter your name" : ""}
            />
            <TextField 
              required
              id="outlined-required"
              label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              variant="filled"
              error={emailError}
              helperText={emailError ? "Please enter your email" : ""}            
            />
          </ThemeProvider>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr' },
            gap: 2,
          }}
          className="contact-form"
        >
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField 
              required
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              variant="filled"
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
          </ThemeProvider>
          <div className='form-flex'>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </div>
        </Box>
      </div>
      {/* Add Snackbar for notifications */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;



