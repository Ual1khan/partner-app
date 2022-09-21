export const parseStats = raw => ({
  statsItems: raw.visits,
  maxNumber: raw.maxNumber,
  classes: raw.trainings,
  visits: raw.total_visits,
  users: raw.total_user,
  profit: raw.total_money,
});

export const parseClassicStats = raw => ({
  classes: raw.trainings || 0,
  visits: raw.visits || 0,
  users: raw.users || 0,
  profit: raw.money || 0,
});

export const monthDict = {
  1: 'За январь',
  2: 'За февраль',
  3: 'За март',
  4: 'За апрель',
  5: 'За май',
  6: 'За июнь',
  7: 'За июль',
  8: 'За август',
  9: 'За сентябрь',
  10: 'За октябрь',
  11: 'За ноябрь',
  12: 'За декабрь',
};

export const yearItems = [
  {
    label: '2022',
    value: 2022,
  },
  {
    label: '2021',
    value: 2021,
  },
  {
    label: '2020',
    value: 2020,
  },
  {
    label: '2019',
    value: 2019,
  },
  {
    label: '2018',
    value: 2018,
  },
];

export const monthItems = [
  {
    label: 'За январь',
    value: 1,
  },
  {
    label: 'За февраль',
    value: 2,
  },
  {
    label: 'За март',
    value: 3,
  },
  {
    label: 'За апрель',
    value: 4,
  },
  {
    label: 'За май',
    value: 5,
  },
  {
    label: 'За июнь',
    value: 6,
  },
  {
    label: 'За июль',
    value: 7,
  },
  {
    label: 'За август',
    value: 8,
  },
  {
    label: 'За сентябрь',
    value: 9,
  },
  {
    label: 'За октябрь',
    value: 10,
  },
  {
    label: 'За ноябрь',
    value: 11,
  },
  {
    label: 'За декабрь',
    value: 12,
  },
];

export const defaultStatsItems = [
  { old: 0, new: 0 },
  { old: 0, new: 0 },
  { old: 0, new: 0 },
  { old: 0, new: 0 },
  { old: 0, new: 0 },
  { old: 0, new: 0 },
  { old: 0, new: 0 },
];
