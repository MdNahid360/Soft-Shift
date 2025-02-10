# Soft Shift
![Hotel Booking System](https://res.cloudinary.com/dp5cm54im/image/upload/v1739182652/Group_37_3_teyn13.png)

## Overview
Soft Shift is a fully dynamic software agency website built with Next.js and EmailJS. It features a modern design and essential sections such as Home, About, Portfolio, Services, Contact, and Career.


#### Preview: [https://soft-shift.vercel.app/](https://soft-shift.vercel.app/)

## Technologies Used
- **Next.js** - For server-side rendering and fast frontend performance
- **EmailJS** - For handling contact form submissions without a backend
- **Tailwind CSS** - For styling and responsive design
- **React** - For dynamic UI components

## Features
- Fully dynamic content management
- Smooth navigation and animations
- EmailJS integration for form submissions
- Responsive design for all devices
- SEO-friendly architecture

## Project Structure
```
/soft-shift
====================================================================================
│── /components      # Reusable React components
│── /app             # Next.js app (Home, About, Portfolio, Services, Contact, Career)
│── /public          # Static assets (images, icons, etc.)
│── /components      # All components
│── /lib             # All library files
│── hooks            # Custom hooks
│── next.config.js   # Next.js configuration
│── package.json     # Dependencies and scripts
│── .env             # Environment variables
```

## Installation
To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/MdNahid360/Soft-Shift.git

# Navigate to the project directory
cd soft-shift

# Install dependencies
npm install  # or yarn install

# Run the development server
npm run dev  # or yarn dev
```

The website will be available at `http://localhost:3000/`.

## EmailJS Integration
To enable the contact form functionality:
1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Get your `SERVICE_ID`, `TEMPLATE_ID`, and `USER_ID`.
3. Add these credentials to your environment variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_id
   ```
4. Ensure the contact form component correctly uses these variables.

## Deployment
To deploy the project, you can use [Vercel](https://vercel.com/):

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy the project
vercel
```

## License
This project is licensed under the MIT License.
