// Contact Us page data
export const contactUsData = {
  pageTitle: "Get in Touch with Our Law Firm",
  
  // Contact cards
  contactCards: [
    {
      title: "ADDRESS",
      content: [
        "Address: Legal Associates Law Firm",
        "123 Justice Street, Suite 456",
        "Legal District, City - 12345",
        "",
        "Office: 789 Attorney Avenue",
        "Professional Plaza, City - 12345"
      ]
    },
    {
      title: "CONTACT",
      content: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "contact@legalassociates.com"
      ]
    },
    {
      title: "VISITING HOURS",
      content: [
        "Office: 9:00 AM to 6:00 PM Monday-Friday",
        "",
        "Consultations: 9:00 AM to 5:00 PM",
        "Monday through Friday"
      ]
    }
  ],
  
  // Contact form
  form: {
    title: "ONLINE INQUIRY FORM",
    fields: {
      name: {
        label: "Name *",
        placeholder: "Enter your full name"
      },
      phone: {
        label: "Phone Number *",
        placeholder: "Enter your phone number"
      },
      email: {
        placeholder: "Enter your email address"
      },
      subject: {
        placeholder: "Enter subject of inquiry"
      },
      description: {
        placeholder: "Provide a brief description of your legal issue"
      },
      preferredContact: {
        placeholder: "Enter preferred method of contact"
      }
    },
    submitButton: "Submit"
  },
  
  // Form validation messages
  validation: {
    nameRequired: "Full Name is required.",
    phoneRequired: "Phone Number is required.",
    phoneInvalid: "Phone Number must be exactly 10 digits.",
    emailRequired: "Email Address is required.",
    emailInvalid: "Invalid email format.",
    subjectRequired: "Subject is required.",
    descriptionRequired: "Description is required.",
    preferredContactRequired: "Preferred contact method is required."
  }
};