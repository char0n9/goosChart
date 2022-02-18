/* eslint-disable import/prefer-default-export */
import { DateTime } from 'luxon';
import { sortBy, prop } from 'ramda';

export function parseData(data) {
  const getYear = (timestamp) => (DateTime.fromMillis(Number(timestamp)).year);
  const getMonth = (timestamp) => (DateTime.fromMillis(Number(timestamp)).monthShort);

  const sortByCreatedAt = sortBy(prop('createdAt'));
  const sortedData = sortByCreatedAt(data);

  const getFinalData = (posts) => {
    const finalData = posts.reduce((acc, current) => {
      const year = getYear(current.createdAt);
      if (year !== 2019) return acc;

      const month = getMonth(current.createdAt);
      if (acc[month]) {
        // eslint-disable-next-line operator-assignment
        acc[month] = acc[month] + 1;
      } else {
        acc[month] = 1;
      }
      return acc;
    }, {});
    //   console.log(finalData)
    return Object.keys(finalData).map((key) => ({
      month: key,
      postCount: finalData[key],
    }));
  };

  return getFinalData(sortedData);
}
