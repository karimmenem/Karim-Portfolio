import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheck,
  FiClock,
  FiGlobe
} from 'react-icons/fi';
import {
  ContactContainer,
  ContactContent,
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactGrid,
  ContactInfo,
  ContactMethod,
  ContactIcon,
  ContactDetails,
  ContactLabel,
  ContactValue,
  ContactForm,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  FormStatus,
  SocialLinks,
  SocialLink,
  LocationCard,
  LocationIcon,
  LocationDetails,
  LocationTitle,
  LocationTime,
  ResponseTime
} from './Contact.styles';
import { personalInfo } from '../../utils/constants';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const onSubmit = async (data) => {
    setFormStatus('sending');
    
    try {
      // Simulate API call - replace with your actual contact form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      setFormStatus('success');
      reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#6366f1"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#f59e0b"
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personalInfo.linkedin,
      color: "#0077b5"
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "View my code",
      href: personalInfo.github,
      color: "#333"
    }
  ];

  // Get current time in Beirut
  const getCurrentTime = () => {
    const now = new Date();
    const beirutTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Beirut',
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    });
    return beirutTime;
  };

  return (
    <ContactContainer id="contact" className="section">
      <ContactContent className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ContactHeader>
            <motion.div variants={itemVariants}>
              <ContactTitle>Let's Work Together</ContactTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactSubtitle>
                Ready to bring your ideas to life? Let's discuss your next project
              </ContactSubtitle>
            </motion.div>
          </ContactHeader>

          <ContactGrid>
            {/* Contact Information */}
            <ContactInfo>
              <motion.div variants={itemVariants}>
                <LocationCard
                  as={motion.div}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <LocationIcon>
                    <FiMapPin />
                  </LocationIcon>
                  <LocationDetails>
                    <LocationTitle>{personalInfo.location}</LocationTitle>
                    <LocationTime>
                      <FiClock />
                      Local time: {getCurrentTime()}
                    </LocationTime>
                  </LocationDetails>
                </LocationCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <ResponseTime>
                  <FiGlobe />
                  <span>I typically respond within 24 hours</span>
                </ResponseTime>
              </motion.div>

              {contactMethods.map((method, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <ContactMethod
                    as={motion.a}
                    href={method.href}
                    target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined}
                    rel={method.label === 'LinkedIn' || method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ContactIcon $color={method.color}>
                      <method.icon />
                    </ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{method.label}</ContactLabel>
                      <ContactValue>{method.value}</ContactValue>
                    </ContactDetails>
                  </ContactMethod>
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <SocialLinks>
                  <SocialLink
                    as={motion.a}
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiLinkedin />
                  </SocialLink>
                  <SocialLink
                    as={motion.a}
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub />
                  </SocialLink>
                  <SocialLink
                    as={motion.a}
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiMail />
                  </SocialLink>
                </SocialLinks>
              </motion.div>
            </ContactInfo>

            {/* Contact Form */}
            <ContactForm
              as={motion.form}
              variants={itemVariants}
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormTitle>Send me a message</FormTitle>
              
              <FormGroup>
                <FormLabel>Name *</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Your full name"
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  $hasError={!!errors.name}
                />
                {errors.name && (
                  <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>
                    {errors.name.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>Email *</FormLabel>
                <FormInput
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  $hasError={!!errors.email}
                />
                {errors.email && (
                  <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>
                    {errors.email.message}
                  </span>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormInput
                  type="text"
                  placeholder="Project inquiry, collaboration, etc."
                  {...register('subject')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Message *</FormLabel>
                <FormTextarea
                  placeholder="Tell me about your project or how I can help you..."
                  rows="5"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  $hasError={!!errors.message}
                />
                {errors.message && (
                  <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>
                    {errors.message.message}
                  </span>
                )}
              </FormGroup>

              <FormButton
                type="submit"
                as={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'sending'}
                $status={formStatus}
              >
                {formStatus === 'sending' && <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <FiClock />
                </motion.div>}
                {formStatus === 'success' && <FiCheck />}
                {formStatus === 'idle' && <FiSend />}
                {formStatus === 'error' && <FiSend />}
                
                {formStatus === 'sending' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
                {formStatus === 'error' && 'Try Again'}
                {formStatus === 'idle' && 'Send Message'}
              </FormButton>

              {formStatus !== 'idle' && (
                <FormStatus
                  as={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  $status={formStatus}
                >
                  {formStatus === 'success' && "Thanks for reaching out! I'll get back to you soon."}
                  {formStatus === 'error' && "Something went wrong. Please try again or email me directly."}
                  {formStatus === 'sending' && "Sending your message..."}
                </FormStatus>
              )}
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;