"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import emailjs from "emailjs-com";
import Grid2 from "@mui/material/Grid2";

const ResumeForm = () => {
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
    role: "",
    position: "",
    // resume: null
  });

  console.log(resume, "form");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file, "evee");

    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resume) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    console.log(reader, "readeeee");

    reader.onload = async (e) => {
      const emailParams = {
        file: reader,
      };

      emailjs
        .sendForm(
          "service_x299nyh",
          "template_jknz8by",
          emailParams,
          "94TtzAZZ4eCvZYHzO"
        )
        .then(
          (response) => {
            console.log("Email", response);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              contact: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.error("Failed to send email:", error);
          }
        );
    };

    // Read the file as a data URL
    reader.readAsDataURL(resume);
  };

  return (
    <form
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 800,
        marginTop: "20px",
        p: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: "circular",
          color: "#650909",
          mb: 2,
        }}
      >
        Get in Touch With Us
      </Typography>
      <Grid2 container spacing={4}>
        {/* First Name & Email */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>

        {/* Contact & Subject */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>

        {/* Role Dropdown */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Select
            fullWidth
            displayEmpty
            variant="standard"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="" disabled>
              Select Role
            </MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
          </Select>
        </Grid2>

        {/* Position Dropdown */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Select
            fullWidth
            displayEmpty
            variant="standard"
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <MenuItem value="" disabled>
              Select Position
            </MenuItem>
            <MenuItem value="Software Engineer">Software Engineer</MenuItem>
            <MenuItem value="Project Manager">Project Manager</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
          </Select>
        </Grid2>

        {/* Upload Resume */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <input
            type="file"
            name={formData?.resume?.name}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
        </Grid2>

        {/* Message */}
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Project description"
            multiline
            rows={2.5}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginBottom: "28px" }}
                >
                  <MessageIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid2>
      </Grid2>

      {/* Submit Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          fontFamily: "circular",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            px: 3,
            py: 1,
            textTransform: "capitalize",
            backgroundColor: "#650909",
            "&:hover": {
              backgroundColor: "#fff",
              border: "1px solid #650909",
              color: "#650909",
            },
          }}
          type="submit"
        >
          Send Enquiry
        </Button>
      </Box>
    </form>
  );
};

export default ResumeForm;
