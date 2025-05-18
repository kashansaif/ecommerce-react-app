import { Box, Typography, Stack } from "@mui/material";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "50px 10px 20px 10px",
        fontFamily: "'Poppins', sans-serif",
      }}
      className="w-full mt-36"
    >
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} className="max-w-6xl mx-auto">
        {/* About Us Section */}
        <Box flex={1}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              marginBottom: "10px",
            }}
          >
            About Us
          </Typography>
          <Typography variant="body2" className="text-gray-200" sx={{ lineHeight: 1.25, fontSize: "0.95rem" }}>
            At [Splendid Cart], we are dedicated to offering high-quality products that enhance the lives of our
            customers. With a customer-first approach, our mission is to provide a seamless shopping experience that
            brings value, trust, and satisfaction to everyone who shops with us. We carefully select each product to
            ensure it meets the highest standards of quality, durability, and functionality.
          </Typography>
        </Box>

        {/* Store Section */}
        <Box flex={1} className="flex flex-col justify-center text-center items-center">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              marginBottom: "-8px",
            }}
          >
            <AttachMoneyIcon fontSize="large" className="mb-2 -me-2" />
            PLENDED CART
          </Typography>
          {/* <img src="https://via.placeholder.com/100" alt="Store Logo" className="w-20 h-auto mx-auto" /> */}
          <StoreMallDirectoryIcon sx={{ fontSize: 64 }} />
        </Box>

        {/* Company Section */}
        <Box flex={1}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              marginBottom: "10px",
            }}
          >
            Company
          </Typography>
          <ul className="space-y-1 p-0 m-0">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Press
              </a>
            </li>
          </ul>
        </Box>

        {/* Help Section */}
        <Box flex={1}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "1.25rem",
              marginBottom: "10px",
            }}
          >
            Help
          </Typography>
          <ul className="space-y-1 p-0 m-0">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                FAQ
              </a>
            </li>
          </ul>
        </Box>
      </Stack>

      {/* Footer Bottom */}
      <Box className="text-center mt-6 text-gray-500" sx={{ borderTop: "1px solid #333", paddingTop: "10px" }}>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.85rem",
            fontWeight: 400,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
