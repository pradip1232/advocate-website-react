// Mock data for development and testing
export const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2024-01-20',
  },
];

export const mockBookings = [
  {
    id: 1,
    customerName: 'Alice Johnson',
    service: 'Legal Consultation',
    date: '2024-02-15',
    status: 'confirmed',
    amount: 250.00,
  },
  {
    id: 2,
    customerName: 'Bob Wilson',
    service: 'Document Review',
    date: '2024-02-18',
    status: 'pending',
    amount: 150.00,
  },
];

export const mockClaims = [
  {
    id: 1,
    claimNumber: 'CLM-001',
    customerName: 'Charlie Brown',
    amount: 500.00,
    status: 'pending',
    submittedDate: '2024-02-10',
  },
  {
    id: 2,
    claimNumber: 'CLM-002',
    customerName: 'Diana Prince',
    amount: 750.00,
    status: 'approved',
    submittedDate: '2024-02-08',
  },
];

export const mockVouchers = [
  {
    id: 1,
    voucherCode: 'SAVE20',
    discount: 20,
    type: 'percentage',
    status: 'active',
    expiryDate: '2024-12-31',
  },
  {
    id: 2,
    voucherCode: 'FLAT50',
    discount: 50,
    type: 'fixed',
    status: 'active',
    expiryDate: '2024-06-30',
  },
];