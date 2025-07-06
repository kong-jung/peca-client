import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CardState {
  name: string;
  aff: string;
  job: string;
  quote: string;
  insta: string;
  github: string;
  mail: string;
  activityName: string;
  activityPeriod: string;
  activityDesc: string;
  color: string;
  setCard: (card: Partial<CardState>) => void;
  resetCard: () => void;
}

export const useCardStore = create<CardState>()(
  persist(
    (set) => ({
      name: '',
      aff: '',
      job: '',
      quote: '',
      insta: '',
      github: '',
      mail: '',
      activityName: '',
      activityPeriod: '',
      activityDesc: '',
      color: '',
      setCard: (card) => set(card),
      resetCard: () => set({
        name: '', aff: '', job: '', quote: '', insta: '', github: '', mail: '',
        activityName: '', activityPeriod: '', activityDesc: '', color: ''
      })
    }),
    {
      name: 'card-storage',
    }
  )
); 