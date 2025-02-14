'use client';

import { useAppContext } from '@/context/AppContext';
import { μετάφραση } from '@/utils/μετάφραση';
import { DateTime } from 'luxon';

const EventMonth = ({ έναρξη }) => {
  const { language } = useAppContext();

  let μήναςΈναρξης =
    έναρξη.split('/').length === 3
      ? DateTime.fromFormat(`${έναρξη.split('/')[1]}`, 'LL')
          .setLocale(μετάφραση('el', language))
          .toLocaleString({ month: 'short' })
      : έναρξη.split('/').length === 2
      ? DateTime.fromFormat(`${έναρξη.split('/')[0]}`, 'LL')
          .setLocale(μετάφραση('el', language))
          .toLocaleString({ month: 'short' })
      : null;

  μήναςΈναρξης === 'Μαρ' ? (μήναςΈναρξης = 'Μάρ') : μήναςΈναρξης;
  μήναςΈναρξης === 'Μαΐ' ? (μήναςΈναρξης = 'Μάι') : μήναςΈναρξης;
  μήναςΈναρξης === 'Ιουν' ? (μήναςΈναρξης = 'Ιούν') : μήναςΈναρξης;
  μήναςΈναρξης === 'Ιουλ' ? (μήναςΈναρξης = 'Ιούλ') : μήναςΈναρξης;
  μήναςΈναρξης === 'Αυγ' ? (μήναςΈναρξης = 'Αύγ') : μήναςΈναρξης;
  μήναςΈναρξης === 'Νοε' ? (μήναςΈναρξης = 'Νοέ') : μήναςΈναρξης;

  return <>{μήναςΈναρξης}</>;
};

export default EventMonth;
