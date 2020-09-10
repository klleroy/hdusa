import React from 'react';
import Jumbotron from '../Jumbotron';

const About = () => {
	return (
		<>
			<Jumbotron />
			<div className='container flex-shrink-0'>
				<h1 className='text-center'>About Us</h1>
				<hr />
				<h3>Mission Statement</h3>
				<p>
					The Hot Dog USA Jump Rope Team is dedicated to the promotion of the
					sport of jump rope as a life-long physical fitness activity. Our
					purpose is to inspire, motivate and educate people of all ages, while
					fostering local, regional, national and international jump rope
					competitions, workshops and performances.
				</p>
				<h3 className='font-weight-bold'>Team Organization</h3>
				<p>
					We have two levels of participation on our team, <b>"Junior Team"</b>{' '}
					and <b>"Elite Team"</b>.
				</p>
				<p>
					<span className='first'>Junior Team</span> is for jumpers who are new
					to the sport but are interested in learning jump rope performance and
					competition skills in a fun, supportive environment. Junior Team
					jumpers participate in 3 to 4 local events each year. Junior team is
					geared for jumpers in 1st through 4th grade, although we have had
					jumpers in Kindergarten and also jumpers in 5th and 6th grade on the
					Junior Team. Elite Team is for jumpers who have taken jump rope
					classes and/or taken part in the Junior Team and are interested in
					becoming more serious about the sport of jump rope. The Elite Team
					participates in many performances, camps, and workshops. As jumpers
					gain skill and maturity, they will also have the chance to represent
					the team at events nationally and internationally.
				</p>
				<p>
					<span className='first'>Elite Team</span> jumpers are generally 4th
					grade and older. We divide the Elite team into smaller groups for
					administrative purposes, usually based on age groups. We have A, B,
					and C teams. Each team group has a group representative who attends
					team board meetings, collects fees and paperwork, and facilitates
					communications for the group.
				</p>

				<p className='pb-4'>
					All team members are required to take specially designed “jump rope
					gymnastics” classes. Among our staff, we have one director, Christi
					Hartman, who is qualified to teach, spot, and develop our jumpers
					through gymnastics training.
				</p>
			</div>
		</>
	);
};

export default About;
