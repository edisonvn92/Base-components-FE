import React from 'react';
import { DatePicker } from 'antd';
import React from 'react';

interface CalendarProps {
  today: boolean;
  className: string;
}

export const CoreDesignCalendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const { today = true, className } = props;
  return (
    <div className={className}>
      <DatePicker open style={{ visibility: 'hidden', width: 0 }} showToday={today} />
    </div>
  );
};
