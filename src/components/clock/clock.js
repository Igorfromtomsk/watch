import React from "react";

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        };

        this.tick = this.tick.bind(this);
    }


    componentDidMount() {
        this.timer = setInterval(this.tick, 250);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        let formatter = new Intl.DateTimeFormat("ru");

        let hours = this.state.time.getHours();
        let minutes = (this.state.time.getMinutes()<10) ? '0'+this.state.time.getMinutes() : this.state.time.getMinutes();
        let seconds = (this.state.time.getSeconds()<10) ? '0'+this.state.time.getSeconds() : this.state.time.getSeconds();
        let date = formatter.formatToParts(this.state.time).map(item => (["year", "literal"].includes(item.type))?false:item.value).filter(item => !!item).join('.');

        return (
            <div className="some-clock">
                <div className="some-clock_front clock-front">
                    <div className="clock-front_header header">
                        <div className="header_stopwatch hidden">

                        </div>
                        <div className="header_timer">

                        </div>
                        <div className="header_alarm">

                        </div>
                    </div>
                    <div className="clock-front_body clock-body">
                        <input className="clock-body_hours" disabled={true} type="text" defaultValue={hours} />
                        <span className="clock-body_two-dots">:</span>
                        <input className="clock-body_minutes" disabled={true} type="text" defaultValue={minutes} />
                        <div className="clock-body_right-side right-side">
                            <span className="right-side_seconds">{seconds}</span>
                            <span className="right-side_date">{date}</span>
                        </div>
                    </div>
                    <div className="clock-front_footer buttons">
                    </div>
                </div>
                <div className="some-clock_back">
                </div>
            </div>
        )
    }
}

export default Clock;