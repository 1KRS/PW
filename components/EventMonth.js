'use client';

import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';
import { DateTime } from 'luxon';

const EventMonth = ({ έναρξη }) => {
  const { language } = useAppContext();

  return (
    <>
      {έναρξη.split('/').length === 2
        ? DateTime.fromFormat(`${έναρξη.split('/')[0]}`, 'LL')
            .setLocale(μετάφραση('el', language))
            .toLocaleString({ month: 'short' })
        : null}
    </>
  );
};

export default EventMonth;
