import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Week } from '../model/week.model';

@Injectable({
	providedIn: 'root',
})
export class DateHelper {
	public Months: Array<string> = new Array<string>('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

	public SchoolMonths: Array<string> = new Array<string>('September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July');

	public Days: Array<string> = new Array<string>('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

	public Hours: Array<string> = new Array<string>('8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00');

	public DatePickerValidator(control: FormGroup): ValidationErrors | null {
		if (isNaN(Date.parse(control.value))) {
			return { badDate: true };
		}
		return null;
	}

	public AddDaysToDate(date: Date, days: number): Date {
		const tempDate: Date = new Date(date.toDateString());
		tempDate.setDate(date.getDate() + days);
		return tempDate;
	}

	public AddMinutesToDate(date: Date, minutes: number): Date {
		const tempDate: Date = new Date(date.toISOString());
		tempDate.setTime(date.getTime() + minutes);
		return tempDate;
	}

	public AreDatesEqual(firstDate: any, secondDate: any): boolean {
		const fDate = new Date(firstDate);
		const sDate = new Date(secondDate);

		if (fDate.getFullYear() !== sDate.getFullYear()) {
			return false;
		}
		if (fDate.getMonth() !== sDate.getMonth()) {
			return false;
		}
		if (fDate.getDate() !== sDate.getDate()) {
			return false;
		}
		return true;
	}

	public AreDateTimesEqual(firstDate: any, secondDate: any): boolean {
		const fDate = new Date(firstDate);
		const sDate = new Date(secondDate);

		if (!this.AreDatesEqual(fDate, sDate)) {
			return false;
		}
		if (fDate.getHours() !== sDate.getHours()) {
			return false;
		}
		if (fDate.getMinutes() !== sDate.getMinutes()) {
			return false;
		}
		return true;
	}

	public GetDateTimeBetweenTwoDates(startDateString: string, emdDateString: string): Date {
		const msHalfDuration: number = Math.floor((new Date(emdDateString).getTime() - new Date(startDateString).getTime()) / 2);
		const dateNumber: number = new Date(startDateString).getTime() + msHalfDuration;
		return new Date(dateNumber);
	}

	public GetDayName(date: Date) {
		return this.Days[date.getDay()];
	}

	public GetFirstMondayForDate(date: Date): Date {
		const nextDate = date;
		let i = 0;
		for (i = 0; i < 8; i++) {
			const dayNumber = nextDate.getDay();

			if (dayNumber === 1) {
				return nextDate;
			}

			nextDate.setDate(nextDate.getDate() - 1);
		}
	}

	public GetMonthAbbreviation(monthInt: number, abbrevLength: number) {
		return this.Months[monthInt].substr(0, abbrevLength);
	}

	public GetDayAbbreviation(date: Date, abbrevLength: number) {
		return this.GetDayName(date).substr(0, abbrevLength);
	}

	public IsCurrentDateTimeBetweenTwoDates(startDateString: string, endDateString: string): boolean {
		if (new Date(startDateString).getTime() <= new Date().getTime() && new Date(endDateString).getTime() >= new Date().getTime()) {
			return true;
		}
		return false;
	}

	public IsTomorrow(date: any): boolean {
		const fDate = new Date(date);
		const sDate = new Date();

		if (fDate.getFullYear() !== sDate.getFullYear()) {
			return false;
		}
		if (fDate.getMonth() !== sDate.getMonth()) {
			return false;
		}
		if (fDate.getDate() !== sDate.getDate() + 1) {
			return false;
		}

		return true;
	}

	public IsWeekend(day: Date): boolean {
		const dayAsDate = new Date(day);

		if (dayAsDate.getDay() === 0 || dayAsDate.getDay() === 6) {
			return true;
		} else {
			return false;
		}
	}

	public IsYesterday(date: any): boolean {
		const fDate = new Date(date);
		const sDate = new Date();

		if (fDate.getFullYear() !== sDate.getFullYear()) {
			return false;
		}
		if (fDate.getMonth() !== sDate.getMonth()) {
			return false;
		}
		if (fDate.getDate() !== sDate.getDate() - 1) {
			return false;
		}
		return true;
	}

	public IsBirthday(date: any): boolean {
		const birthday = new Date(date);
		const dateToday = new Date();
		if (birthday.getMonth() !== dateToday.getMonth()) {
			return false;
		}

		if (birthday.getDate() !== dateToday.getDate()) {
			return false;
		}

		return true;
	}

	public ParseTime(t) {
		const d: Date = new Date();
		const time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
		d.setHours(parseInt(time[1], 10) + (time[3] ? 12 : 0));
		d.setMinutes(parseInt(time[2], 10) || 0);
		d.setSeconds(0);
		return d;
	}

	public PercentTimeElapsedBetweenTwoDates(startDateString: string, endDateString: string): number {
		const msRange: number = new Date(endDateString).getTime() - new Date(startDateString).getTime();
		const msElapsed: number = new Date().getTime() - new Date(startDateString).getTime();

		if (Math.round((msElapsed / msRange) * 100) > 100) {
			return 100;
		}

		if (Math.round((msElapsed / msRange) * 100) < 0) {
			return 0;
		}

		return Math.round((msElapsed / msRange) * 100);
	}

	public SetTimeToMidnight(date: Date): Date {
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return date;
	}

	public DaysElapsedBetweenTwoDates(startDateString: string, endDateString: string): number {
		const endDate = new Date(endDateString);
		const startDate = new Date(startDateString);
		return (
			Math.floor((Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24)) + 1
		);
	}

	public MinutesTimeElapsedBetweenTwoDates(startDateString: string, endDateString: string): number {
		const endDate = new Date(endDateString);
		const startDate = new Date(startDateString);

		let diff = (endDate.getTime() - startDate.getTime()) / 1000;
		diff /= 60;
		return Math.abs(Math.round(diff));
	}

	public ToUTC0String(date: Date): string {
		return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
	}

	public ValidateDate(dateString: string): boolean {
		const date: Date = new Date(Date.parse(dateString));

		if (Object.prototype.toString.call(date) !== '[object Date]') {
			return false;
		}
		if (isNaN(date.getTime())) {
			return false;
		}
		if (date.getFullYear() > 3000) {
			return false;
		}
		return true;
	}

	public GetWeeksInDateRange(startDate: Date, endDate: Date): Array<Date> {
		const weeks: Array<Date> = new Array<Date>();
		weeks.push(startDate);
		startDate = this.GetNextMonday(startDate);

		while (startDate <= endDate) {
			weeks.push(startDate);
			startDate = this.GetNextMonday(startDate);
		}
		return weeks;
	}

	public GetWeeksOfYear(startDate?: Date, numWeeks?: number): Array<string> {
		const weeks: Array<string> = new Array<string>();
		if (!startDate) {
			startDate = this.GetDate1stSeptember();
		}
		startDate = this.GetPreviousMonday(startDate);

		if (!numWeeks) {
			numWeeks = 52;
		}

		for (let i = 0; i < numWeeks; i++) {
			weeks.push(this.FormatDateToDDMM(this.AddDaysToDate(startDate, 7 * i)));
		}
		return weeks;
	}

	public GetDate1stSeptember(date?: Date): Date {
		if (!date) {
			date = new Date();
		}
		const year = date.getFullYear();
		return new Date(year, 8, 1);
	}

	public DateIsCurrentWeek(week: Week): boolean {
		if (!this.ValidateDate(week.startDate.toISOString())) {
			return false;
		}
		if (!this.ValidateDate(week.endDate.toISOString())) {
			return false;
		}
		if (new Date() >= week.startDate && new Date() <= week.endDate) {
			return true;
		}
		return false;
	}

	public GetNextMondayOrLastDayOfMonth(date: Date): Date {
		let endDate = this.GetNextMonday(date);
		if (date.getMonth() === endDate.getMonth()) {
			return endDate;
		}
		while (date.getMonth() !== endDate.getMonth()) {
			endDate = this.AddDaysToDate(endDate, -1);
		}
		return endDate;
	}

	public ReturnDaysElapsed(startDate: Date, endDate: Date) {
		return Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
	}

	public GetNextMonday(date: Date): Date {
		date = this.AddDaysToDate(date, 1);
		while (date.getDay() !== 1) {
			date = this.AddDaysToDate(date, 1);
		}
		return new Date(date);
	}

	public GetPreviousMonday(date: Date): Date {
		if (date.getDay() === 1) {
			return date;
		}
		while (date.getDay() !== 1) {
			date = this.AddDaysToDate(date, -1);
		}
		return date;
	}

	public FormatDateToDDMM(date?: Date): string {
		if (!date) {
			date = new Date();
		} else {
			date = new Date(date);
		}
		let dd = '';
		let mm = '';
		date.getDate() < 10 ? (dd = `0${date.getDate()}`) : (dd = `${date.getDate()}`);
		date.getMonth() < 9 ? (mm = `0${date.getMonth() + 1}`) : (mm = `${date.getMonth() + 1}`);
		return `${dd}/${mm}`;
	}

	public FormatDateToDDMMYYYY(date?: Date): string {
		if (!date) {
			date = new Date();
		} else {
			date = new Date(date);
		}
		let dd = '';
		let mm = '';
		const year = date.getFullYear();
		date.getDate() < 10 ? (dd = `0${date.getDate()}`) : (dd = `${date.getDate()}`);
		date.getMonth() < 9 ? (mm = `0${date.getMonth() + 1}`) : (mm = `${date.getMonth() + 1}`);
		return `${dd}/${mm}/${year}`;
	}

	public FormatDateToHHSS(date?: Date): string {
		if (!date) {
			date = new Date();
		} else {
			date = new Date(date);
		}
		let hh = '';
		let mm = '';
		date.getHours() < 10 ? (hh = `0${date.getHours()}`) : (hh = `${date.getHours()}`);
		date.getMinutes() < 10 ? (mm = `0${date.getMinutes()}`) : (mm = `${date.getMinutes()}`);
		return `${hh}:${mm}`;
	}

	public FormatDateToDayAndDate(date?: Date): string {
		if (!date) {
			date = new Date();
		} else {
			date = new Date(date);
		}
		const day = this.GetDayAbbreviation(date, 3);
		const dd = date.getDate();
		const mm = this.GetMonthAbbreviation(date.getMonth(), 3);
		const fullYear = date.getFullYear();
		return `${day}, ${dd} ${mm} ${fullYear}`;
	}

	public FormatDateToDDXXMMMMYYY(date?: Date): string {
		if (!date) {
			date = new Date();
		} else {
			date = new Date(date);
		}
		let dd = date.getDate() + this.FormatNumberWithOrdinal(date.getDate());
		let mm = this.Months[date.getMonth()];
		let fullYear = date.getFullYear();
		return `${dd} ${mm} ${fullYear}`;
	}

	public FormatNumberWithOrdinal(d) {
		if (d > 3 && d < 21) return 'th';
		switch (d % 10) {
			case 1:
				return 'st';
			case 2:
				return 'nd';
			case 3:
				return 'rd';
			default:
				return 'th';
		}
	}

	public ResolveFullYearForMonth(monthLabel: string): number {
		const date = new Date();
		const year = date.getFullYear();
		if (date.getMonth() >= 8 && this.Months.findIndex(m => m === monthLabel) < 8) {
			return year + 1;
		}
		if (date.getMonth() < 8 && this.Months.findIndex(m => m === monthLabel) >= 8) {
			return year - 1;
		}
		return year;
	}
}
