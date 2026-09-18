export const supportedLanguages = ['English','Español','Français','Deutsch','Português','العربية','हिन्दी','日本語','한국어'];
export const supportedCurrencies = ['USD - US Dollar','EUR - Euro','GBP - British Pound','CAD - Canadian Dollar','AUD - Australian Dollar','INR - Indian Rupee','AED - Dirham','JPY - Japanese Yen'];

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller';
  language: string;
  currency: string;
  country: string;
  bio: string;
  location: string;
  avatar: string;
  createdAt: string;
  pro: boolean;
};

export type Car = {
  id: string;
  name: string;
  location: string;
  price: string;
  mileage: string;
  transmission: string;
  fuel: string;
  category: string;
  status: string;
  sellerId: string;
  image: string;
  description: string;
  views: number;
  createdAt: string;
};

export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  createdAt: string;
};

export const defaultUsers: User[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    email: 'sarah@norcal.com',
    password: 'password123',
    role: 'seller',
    language: 'English',
    currency: 'USD - US Dollar',
    country: 'United States',
    bio: 'Curating premium vehicles for buyers who care about design, quality, and long-term value.',
    location: 'Los Angeles, US',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
    createdAt: new Date().toISOString(),
    pro: true
  },
  {
    id: 'omar-hassan',
    name: 'Omar Hassan',
    email: 'omar@norcal.com',
    password: 'password123',
    role: 'seller',
    language: 'English',
    currency: 'AED - Dirham',
    country: 'United Arab Emirates',
    bio: 'Helping families and professionals find reliable cars at fair prices with transparent communication.',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    createdAt: new Date().toISOString(),
    pro: true
  },
  {
    id: 'lina-patel',
    name: 'Lina Patel',
    email: 'lina@norcal.com',
    password: 'password123',
    role: 'seller',
    language: 'English',
    currency: 'INR - Indian Rupee',
    country: 'India',
    bio: 'Passionate about electric mobility and helping buyers find efficient premium EVs.',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80',
    createdAt: new Date().toISOString(),
    pro: false
  },
  {
    id: 'daniel-mora',
    name: 'Daniel Mora',
    email: 'daniel@norcal.com',
    password: 'password123',
    role: 'seller',
    language: 'Español',
    currency: 'EUR - Euro',
    country: 'Spain',
    bio: 'High-performance vehicle enthusiast focused on modern classics and performance-ready machines.',
    location: 'Madrid, Spain',
    avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80',
    createdAt: new Date().toISOString(),
    pro: true
  }
];

export const defaultCars: Car[] = [
  {
    id: 'car-1',
    name: '2023 Mercedes C-Class',
    location: 'Los Angeles, US',
    mileage: '18,000',
    transmission: 'Automatic',
    fuel: 'Hybrid',
    category: 'Luxury',
    price: '35800',
    status: 'Certified',
    sellerId: 'sarah-chen',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    description: 'Luxury sedan in excellent condition with full service history.',
    views: 1280,
    createdAt: new Date().toISOString()
  },
  {
    id: 'car-2',
    name: '2022 BMW X5',
    location: 'Dubai, UAE',
    mileage: '24,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    category: 'SUV',
    price: '47800',
    status: 'New arrival',
    sellerId: 'omar-hassan',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium SUV with panoramic roof and premium drive assistance.',
    views: 900,
    createdAt: new Date().toISOString()
  },
  {
    id: 'car-3',
    name: '2024 Tesla Model 3',
    location: 'Mumbai, India',
    mileage: '12,500',
    transmission: 'Automatic',
    fuel: 'Electric',
    category: 'Electric',
    price: '42900',
    status: 'Popular',
    sellerId: 'lina-patel',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80',
    description: 'Efficient electric sedan with long range and fast charging.',
    views: 2200,
    createdAt: new Date().toISOString()
  },
  {
    id: 'car-4',
    name: '2021 Porsche 911',
    location: 'Madrid, Spain',
    mileage: '20,700',
    transmission: 'Automatic',
    fuel: 'Petrol',
    category: 'Luxury',
    price: '68700',
    status: 'Premium',
    sellerId: 'daniel-mora',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    description: 'Performance machine with premium trim and sports driving dynamics.',
    views: 1650,
    createdAt: new Date().toISOString()
  }
];

const STORAGE_KEYS = {
  users: 'norcal_users',
  cars: 'norcal_cars',
  currentUser: 'norcal_current_user',
  messages: 'norcal_messages'
};

const readStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  const value = window.localStorage.getItem(key);
  if (!value) return fallback;
  try { return JSON.parse(value) as T; } catch { return fallback; }
};

const writeStorage = <T,>(key: string, value: T) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const ensureSeedData = () => {
  if (typeof window === 'undefined') return;
  if (!window.localStorage.getItem(STORAGE_KEYS.users)) {
    writeStorage(STORAGE_KEYS.users, defaultUsers);
  }
  if (!window.localStorage.getItem(STORAGE_KEYS.cars)) {
    writeStorage(STORAGE_KEYS.cars, defaultCars);
  }
  if (!window.localStorage.getItem(STORAGE_KEYS.messages)) {
    writeStorage(STORAGE_KEYS.messages, [
      { id: 'msg-1', senderId: 'sarah-chen', receiverId: 'omar-hassan', text: 'Hi! Is the BMW still available?', createdAt: new Date().toISOString() },
      { id: 'msg-2', senderId: 'omar-hassan', receiverId: 'sarah-chen', text: 'Yes — it is still available and ready for a test drive.', createdAt: new Date().toISOString() }
    ]);
  }
};

export const getUsers = (): User[] => {
  ensureSeedData();
  return readStorage<User[]>(STORAGE_KEYS.users, defaultUsers);
};

export const getCars = (): Car[] => {
  ensureSeedData();
  return readStorage<Car[]>(STORAGE_KEYS.cars, defaultCars);
};

export const featuredCars = (cars: Car[]) => cars.slice(0, 4);

export const getCurrentUser = (): User | null => {
  ensureSeedData();
  return readStorage<User | null>(STORAGE_KEYS.currentUser, null);
};

export const setCurrentUser = (user: User | null) => {
  writeStorage(STORAGE_KEYS.currentUser, user);
};

export const createUser = (input: {
  name: string;
  email: string;
  password: string;
  language: string;
  currency: string;
  country: string;
  role: 'buyer' | 'seller';
}) => {
  const users = getUsers();
  if (users.some((user) => user.email.toLowerCase() === input.email.toLowerCase())) {
    throw new Error('A user with this email already exists.');
  }

  const newUser: User = {
    id: `${input.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
    name: input.name,
    email: input.email,
    password: input.password,
    role: input.role,
    language: input.language,
    currency: input.currency,
    country: input.country,
    bio: 'New Norcal user exploring the marketplace.',
    location: input.country,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    createdAt: new Date().toISOString(),
    pro: false
  };

  users.push(newUser);
  writeStorage(STORAGE_KEYS.users, users);
  setCurrentUser(newUser);
  return newUser;
};

export const loginUser = (email: string, password: string): User => {
  const users = getUsers();
  const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase() && item.password === password);
  if (!user) throw new Error('Invalid email or password.');
  setCurrentUser(user);
  return user;
};

export const logoutUser = () => {
  setCurrentUser(null);
};

export const addCar = (car: Omit<Car, 'id' | 'createdAt'> & { id?: string }) => {
  const cars = getCars();
  const newCar: Car = {
    ...car,
    id: car.id || `car-${Date.now()}`,
    createdAt: new Date().toISOString(),
    views: car.views || 0,
    description: car.description || 'Fresh listing from Norcal.'
  };
  cars.unshift(newCar);
  writeStorage(STORAGE_KEYS.cars, cars);
  return newCar;
};

export const getMessagesForUsers = (userA: string, userB: string): Message[] => {
  if (!userA || !userB) return [];
  const messages = readStorage<Message[]>(STORAGE_KEYS.messages, []);
  return messages.filter(
    (msg) =>
      (msg.senderId === userA && msg.receiverId === userB) ||
      (msg.senderId === userB && msg.receiverId === userA)
  );
};

export const sendMessage = ({ from, to, text }: { from: string; to: string; text: string }) => {
  const messages = readStorage<Message[]>(STORAGE_KEYS.messages, []);
  const message: Message = {
    id: `msg-${Date.now()}`,
    senderId: from,
    receiverId: to,
    text,
    createdAt: new Date().toISOString()
  };
  messages.push(message);
  writeStorage(STORAGE_KEYS.messages, messages);
  return message;
};

export const saveUserProfile = (user: User) => {
  const users = getUsers();
  const updatedUsers = users.map((item) => (item.id === user.id ? user : item));
  writeStorage(STORAGE_KEYS.users, updatedUsers);
  setCurrentUser(user);
  return user;
};

export const getSellerById = (id: string) => {
  return getUsers().find((user) => user.id === id) || getUsers()[0];
};
