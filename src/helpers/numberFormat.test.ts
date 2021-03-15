import {
	createNumberFormatter,
	numberFormat,
	percentFormat,
} from "./numberFormat";

it("formats whole numbers", () => {
	expect(numberFormat(-0)).toEqual("-0");
	expect(numberFormat(0)).toEqual("0");
	expect(numberFormat(-1)).toEqual("-1");
	expect(numberFormat(1)).toEqual("1");
	expect(numberFormat(-2)).toEqual("-2");
	expect(numberFormat(2)).toEqual("2");
	expect(numberFormat(-1_000)).toEqual("-1,000");
	expect(numberFormat(1_000)).toEqual("1,000");
	expect(numberFormat(99_999_999)).toEqual("99,999,999");
	expect(numberFormat(-99_999_999)).toEqual("-99,999,999");
});

it("formats decimal numbers", () => {
	expect(numberFormat(-0.0)).toEqual("-0");
	expect(numberFormat(0.0)).toEqual("0");
	expect(numberFormat(-1.0)).toEqual("-1");
	expect(numberFormat(1.0)).toEqual("1");
	expect(numberFormat(-2.0)).toEqual("-2");
	expect(numberFormat(2.0)).toEqual("2");
	expect(numberFormat(-1_000.0)).toEqual("-1,000");
	expect(numberFormat(1_000.0)).toEqual("1,000");
	expect(numberFormat(99_999_999.0)).toEqual("99,999,999");
	expect(numberFormat(-99_999_999.0)).toEqual("-99,999,999");

	expect(numberFormat(-0.2)).toEqual("-0.2");
	expect(numberFormat(0.2)).toEqual("0.2");
	expect(numberFormat(-1.35)).toEqual("-1.35");
	expect(numberFormat(1.35)).toEqual("1.35");
	expect(numberFormat(-2.5)).toEqual("-2.5");
	expect(numberFormat(2.5)).toEqual("2.5");
	expect(numberFormat(-1_000.625)).toEqual("-1,000.625");
	expect(numberFormat(1_000.625)).toEqual("1,000.625");
	expect(numberFormat(99_999_999.1)).toEqual("99,999,999.1");
	expect(numberFormat(-99_999_999.1)).toEqual("-99,999,999.1");
});

it("formats numbers to correct number of decimal places", () => {
	const format = createNumberFormatter({ decimalPlaces: 2 });

	expect(format(-0)).toEqual("-0.00");
	expect(format(0)).toEqual("0.00");
	expect(format(-1)).toEqual("-1.00");
	expect(format(1)).toEqual("1.00");
	expect(format(-2)).toEqual("-2.00");
	expect(format(2)).toEqual("2.00");
	expect(format(-1_000)).toEqual("-1,000.00");
	expect(format(1_000)).toEqual("1,000.00");
	expect(format(99_999_999)).toEqual("99,999,999.00");
	expect(format(-99_999_999)).toEqual("-99,999,999.00");

	expect(format(-0.2)).toEqual("-0.20");
	expect(format(0.2)).toEqual("0.20");
	expect(format(-1.35)).toEqual("-1.35");
	expect(format(1.35)).toEqual("1.35");
	expect(format(-2.5)).toEqual("-2.50");
	expect(format(2.5)).toEqual("2.50");
	expect(format(-1_000.624)).toEqual("-1,000.62");
	expect(format(1_000.624)).toEqual("1,000.62");
	expect(format(-1_000.625)).toEqual("-1,000.63");
	expect(format(1_000.625)).toEqual("1,000.63");
	expect(format(99_999_999.1)).toEqual("99,999,999.10");
	expect(format(-99_999_999.1)).toEqual("-99,999,999.10");
});

it("formats percentages", () => {
	expect(percentFormat(-0.0)).toEqual("-0%");
	expect(percentFormat(0.0)).toEqual("0%");
	expect(percentFormat(-1.0)).toEqual("-1%");
	expect(percentFormat(1.0)).toEqual("1%");
	expect(percentFormat(-2.0)).toEqual("-2%");
	expect(percentFormat(2.0)).toEqual("2%");
	expect(percentFormat(-1_000.0)).toEqual("-1,000%");
	expect(percentFormat(1_000.0)).toEqual("1,000%");
	expect(percentFormat(99_999_999.0)).toEqual("99,999,999%");
	expect(percentFormat(-99_999_999.0)).toEqual("-99,999,999%");

	expect(percentFormat(-0.2)).toEqual("-0.2%");
	expect(percentFormat(0.2)).toEqual("0.2%");
	expect(percentFormat(-1.35)).toEqual("-1.35%");
	expect(percentFormat(1.35)).toEqual("1.35%");
	expect(percentFormat(-2.5)).toEqual("-2.5%");
	expect(percentFormat(2.5)).toEqual("2.5%");
	expect(percentFormat(-1_000.625)).toEqual("-1,000.625%");
	expect(percentFormat(1_000.625)).toEqual("1,000.625%");
	expect(percentFormat(99_999_999.1)).toEqual("99,999,999.1%");
	expect(percentFormat(-99_999_999.1)).toEqual("-99,999,999.1%");
});
