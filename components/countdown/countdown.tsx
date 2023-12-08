"use strict"
import React from "react";
import Countdown from "react-countdown-now";

interface CountdownTimerProps {
	date: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ date }) => {
	const renderer = ({ hours, minutes, seconds, completed }: any) => {
		if (completed) {
			return <span className="hidden">Lançado!</span>;
		} else {
			return (
				<span>
					{hours}:{minutes}:{seconds}
				</span>
			);
		}
	};

	return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
