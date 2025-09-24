import React from "react";
import visa from "../assets/Icons/visa.png";
import mastercard from "../assets/Icons/masterCard.png";
import amex from "../assets/Icons/amex.png";
import tabby from "../assets/Icons/tabby.png";
import tamara from "../assets/Icons/tamara.png";
import gpay from "../assets/Icons/gpay.png";
import pickup from "../assets/Icons/pick_up.png";
import freeship from "../assets/Icons/free_shipping.png";
import payment from '../assets/Icons/payment.png';
import help from '../assets/Icons/help.png';
import {
  Box,
  Container,
  Avatar,
  Grid,
  Typography,
  
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import { FaApple, FaGooglePlay, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <Paper elevation={5}>
    <Box sx={{ bgcolor: "#fff", py: 6, mt:'5rem', borderRadius:'1rem',  }} >
      
      <Container>
        {/* Top Services Row */}
        <Grid container spacing={3} mb={6} >
          {[
            { title: "Free in-store pick up", desc: "24/7 Amazing services", logo: pickup },
            { title: "Free Shipping", desc: "24/7 Amazing services", logo : freeship },
            { title: "Flexible Payment", desc: "24/7 Amazing services", logo : payment },
            { title: "Convenient help", desc: "24/7 Amazing services" , logo: help  },
          ].map((item) => (
             <Grid size = {{ xs:12, sm:6, md:3}} key={item.id}>
                       <Paper
                         elevation={2}
                         sx={{
                           display: "flex",
                           alignItems: "center",
                           gap: 2,
                           p: 2,
                           borderRadius: "0.75rem",
                           height: "100%",
                         }}
                       >
                         <Avatar
                           src={item.logo}
                           alt={item.name}
                           sx={{
                             width: 56,
                             height: 56,
                             backgroundColor: "#f9f9f9",
                             border: "1px solid #eee",
                           }}
                         />
                         <Box>
                           <Typography fontWeight={600}>{item.title}</Typography>
                           <Typography variant="body2" color="text.secondary">
                             {item.desc}
                           </Typography>
                         </Box>
                       </Paper>
                     </Grid>
          ))}
        </Grid>

        {/* Bottom Footer Links */}
        <Grid container spacing={4} mb={4}>
          <Grid size={{xs:12, sm:6, md:3}} >
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              About Emox
            </Typography>
            {[
              "Company info",
              "News",
              "Investors",
              "Careers",
              "Diversity & Inclusion",
              "Advertise with us",
              "Policies",
              "Verified Rights Owner (VeRO) Program",
              "eCI Licenses",
            ].map((link, idx) => (
              <Typography key={idx} variant="body2" color="text.secondary" mb={0.5}>
                {link}
              </Typography>
            ))}
          </Grid>

          <Grid size= {{xs:12, sm:6, md:3}} >
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Order & Purchases
            </Typography>
            {[
              "Check order Status",
              "Shipping, Delivery & Pickup",
              "Returns & Exchanges",
              "Price Match Guarantee",
              "Product Recalls",
              "Trade In Program",
              "Gift Cards",
            ].map((link, idx) => (
              <Typography key={idx} variant="body2" color="text.secondary" mb={0.5}>
                {link}
              </Typography>
            ))}
          </Grid>

          <Grid size={{xs:12, sm:6, md:3}} >
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Popular Categories
            </Typography>
            {[
              "Check order Status",
              "Shipping, Delivery & Pickup",
              "Returns & Exchanges",
              "Price Match Guarantee",
              "Product Recalls",
              "Trade In Program",
              "Gift Cards",
            ].map((link, idx) => (
              <Typography key={idx} variant="body2" color="text.secondary" mb={0.5}>
                {link}
              </Typography>
            ))}
          </Grid>

          <Grid size={{xs:12, sm:6, md:3}} >
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Support & Services
            </Typography>
            {["Seller Center", "Contact Us", "eBay Returns", "eBay Money Back Guarantee"].map(
              (link, idx) => (
                <Typography key={idx} variant="body2" color="text.secondary" mb={0.5}>
                  {link}
                </Typography>
              )
            )}

            <Typography variant="subtitle1" fontWeight="bold" mt={3} mb={1}>
              Region Country
            </Typography>
            <Typography variant="body2" color="text.secondary">
              United Arab Emirates ▼
            </Typography>
          </Grid>
        </Grid>

        {/* Download & Payment */}
        <Grid container spacing={4} alignItems="center" mb={4}>
          <Grid size={{xs:12, sm:4}} >
            <Typography variant="subtitle1" fontWeight="bold" mb={1} >
              Download Our App
            </Typography>
            <Stack direction="row" spacing={2}>
              <FaApple size={28} />
              <FaGooglePlay size={28} />
            </Stack>
          </Grid>

          <Grid size={{xs:12, sm:4}}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Payment Method
            </Typography>
            <Stack direction="row" spacing={2}>
              <img src={visa} alt="Visa" height="25" />
              <img src={mastercard} alt="MasterCard" height="25" />
              <img src={amex} alt="AmEx" height="25" />
              <img src={tamara} alt="Tamara" height="25" />
              <img src={gpay} alt="Gpay" height="25" />
              <img src={tabby} alt="Tabby" height="25" />
            </Stack>
          </Grid>

          <Grid size={{xs:12, sm:4}}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Stay Connected
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton><FaFacebook /></IconButton>
              <IconButton><FaInstagram /></IconButton>
              <IconButton><FaTwitter /></IconButton>
              <IconButton><FaYoutube /></IconButton>
              <IconButton><FaTiktok /></IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Policy Row */}
        <Box textAlign="center" borderTop="1px solid #ddd" pt={2}>
          <Typography variant="body2" color="text.secondary">
            © Emox All Rights Reserved. | Privacy Policy | Terms of Use | Warranty Policy
          </Typography>
        </Box>
      </Container>



      
    </Box>
    </Paper>
  );
}
