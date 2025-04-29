import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, browse our collection, select the items you want, add them to your cart, and proceed to checkout. Follow the steps to provide shipping details and payment information.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, PayPal, and bank transfers. All payments are securely processed.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Domestic orders typically take 3-5 business days. International shipping can take 7-14 business days depending on the destination and customs processing.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unworn items in original condition. Please visit our Shipping & Returns page for detailed information on the return process.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary based on location.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a confirmation email with tracking information. You can also check your order status by visiting "My Orders" in your account dashboard.'
    },
    {
      question: 'Do you offer size exchanges?',
      answer: 'Yes, we offer size exchanges within our 30-day return period. Please contact our customer service team to arrange an exchange.'
    },
    {
      question: 'Are your products sustainable?',
      answer: 'Yes, we prioritize sustainability. Our bamboo fiber clothing is eco-friendly, and we use sustainable practices in our manufacturing process.'
    }
  ];

  return (
    <Container maxWidth="md" sx={{ my: 6, minHeight: '70vh' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        Frequently Asked Questions
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" paragraph align="center">
          Find answers to the most common questions about our products, shipping, returns, and more.
        </Typography>
      </Box>

      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2, boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ background: '#f7f7f7' }}
          >
            <Typography variant="h6" sx={{ fontWeight: 500 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body1">
          Still have questions? Feel free to <a href="/contact" style={{ color: '#000', fontWeight: 'bold', textDecoration: 'underline' }}>contact us</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQ;

