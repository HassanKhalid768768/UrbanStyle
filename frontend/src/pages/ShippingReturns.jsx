import React from 'react';
import { Container, Typography, Box, Paper, Divider, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import PaymentIcon from '@mui/icons-material/Payment';
import HelpIcon from '@mui/icons-material/Help';

const ShippingReturns = () => {
  return (
    <Container maxWidth="md" sx={{ my: 6, minHeight: '70vh' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        Shipping & Returns
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" paragraph align="center">
          Our policies are designed to ensure you have a seamless shopping experience from purchase to delivery.
        </Typography>
      </Box>

      {/* Shipping Policy */}
      <Paper elevation={3} sx={{ p: 4, mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LocalShippingIcon sx={{ fontSize: 40, mr: 2, color: '#333' }} />
          <Typography variant="h4" component="h2">
            Shipping Policy
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
          Delivery Timeframes
        </Typography>
        <Typography variant="body1" paragraph>
          • Domestic Orders (within Pakistan): 2-5 business days<br />
          • International Orders: 7-14 business days<br />
          • Express Shipping: 1-3 business days (additional charges apply)
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, mt: 3 }}>
          Shipping Costs
        </Typography>
        <Typography variant="body1" paragraph>
          • Free shipping on all domestic orders above Rs. 3,000<br />
          • Standard domestic shipping: Rs. 200<br />
          • International shipping: Calculated at checkout based on destination and package weight
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, mt: 3 }}>
          Order Tracking
        </Typography>
        <Typography variant="body1" paragraph>
          Once your order ships, you'll receive a tracking number via email. You can also view your order status in the "My Orders" section of your account.
        </Typography>
      </Paper>

      {/* Returns Process */}
      <Paper elevation={3} sx={{ p: 4, mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AssignmentReturnIcon sx={{ fontSize: 40, mr: 2, color: '#333' }} />
          <Typography variant="h4" component="h2">
            Returns Process
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
          Return Criteria
        </Typography>
        <Typography variant="body1" paragraph>
          We accept returns within 30 days of delivery if the items meet the following criteria:
          <br /><br />
          • Item is unworn, unwashed, and in original condition<br />
          • All original tags and packaging are intact<br />
          • You have proof of purchase (order number or receipt)<br />
          • Items marked as "Final Sale" are not eligible for return
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, mt: 3 }}>
          How to Initiate a Return
        </Typography>
        <Typography variant="body1" paragraph>
          1. Contact our customer service representative at <strong>+92 300 123 4567</strong> or <strong>support@urbanstyle.com</strong><br />
          2. Provide your order number and details about the item you wish to return<br />
          3. Our representative will guide you through the return process<br />
          4. Package the item securely with all original tags and packaging<br />
          5. Return the parcel to our return address (listed below)<br />
          6. We recommend using a tracked shipping service for your protection
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, mt: 3 }}>
          Return Address
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
          UrbanStyle Returns Department<br />
          123 Fashion Avenue<br />
          Gulberg III, Lahore<br />
          Pakistan 54000
        </Typography>
      </Paper>

      {/* Refund Policy */}
      <Paper elevation={3} sx={{ p: 4, mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PaymentIcon sx={{ fontSize: 40, mr: 2, color: '#333' }} />
          <Typography variant="h4" component="h2">
            Refund Policy
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        
        <Typography variant="body1" paragraph>
          Once we receive your return, our team will inspect the item to ensure it meets our return criteria. After approval:
        </Typography>
        
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ border: '1px solid #ddd', p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Original Payment Method
              </Typography>
              <Typography variant="body2">
                Refunds will be issued to the original payment method within 7-10 business days after approval.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ border: '1px solid #ddd', p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                Store Credit
              </Typography>
              <Typography variant="body2">
                You may choose to receive store credit instead, which will be issued immediately and includes an additional 10% bonus.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Typography variant="body1" paragraph>
          Shipping costs are non-refundable unless the return is due to our error (damaged or incorrect item). If you received free shipping on your order, the standard shipping cost will be deducted from your refund.
        </Typography>
      </Paper>

      {/* Questions */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <HelpIcon sx={{ fontSize: 40, mr: 2, color: '#333' }} />
          <Typography variant="h4" component="h2">
            Still Have Questions?
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        
        <Typography variant="body1" paragraph>
          Our customer service team is here to help with any questions regarding shipping, returns, or refunds.
        </Typography>
        
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body1">
            Contact us at <strong>support@urbanstyle.com</strong> or visit our{' '}
            <a href="/contact" style={{ color: '#000', fontWeight: 'bold', textDecoration: 'underline' }}>
              Contact Page
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ShippingReturns;

