// NPM MODULES:
import type { typeNotificationsArray } from '$lib/index.js'; // import type { typeNotificationsArray } from 'svelte-jean';

export const arrayNotifications: typeNotificationsArray = [
	{
		booleanRead: true,
		stringTitle: 'Mark Stuart',
		stringText: 'Mentioned you in a comment.',
		stringIcon: '💬',
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		stringImage:
			'data:image/webp;base64,UklGRggCAABXRUJQVlA4IPwBAACwCACdASooACgAPm0skUWkIqGVXVdUQAbEsYBicxQC/CaKxmE79XtTzmpzu7GlN/FcACX6JK7PKyk5dZxMbFeu13xeBVzGfOTZPNucJwAA/v5g48AmfX/yf1uRUNO2Dp/FAWpYK6QkTvRCG2EktnCP/pziPuY3MXyjjjv0ckyEnmw+GLz60d3c3qL9BzY5nsNnOxsX58PfLTZaud2BHA836cwiUd0yK/4LyfeAwG+biz3WmrxxKzGn3XlDZeV2gLml0i5v3x3AWoqRa1Ke9AY/9oeitTXWKt0PEFRGebzBNMq/u5rIIRRgoeSOH0xEJLlEs8vWBSuxHz9c+MyNwlQeAPEi6N4k2Lvtbg9nLlfcH2EcmeKCXkKWj9WJnal+m50AU/0VXikrjJgzIl8hm3nzBSai8VLv+M8s9S7jnt7AKp+/wqV8+Qq7yXkeY7UZL5br3k2Cz5N2NfuGnK8vr8OIT7yxT7K63/8Tg9x55LT5fZT7LYAchGw7Te8y65c/H/5ty6KrokedqtRFj3JJoHOV9sZgQ2b0LRVxPGyP5EYih1u9GNW2kqfqj9KZaYSVjWGUMS5Bfpoqvgehm2/2LeHhLWLDy0WuU+/w4+znAnMgytMiwo9JCvLSF2nd9gBxVuhnkvGd5NYS0d0/yAiJVyVmg6n3pw40BE1yAAAA',
		booleanOnline: true,
		stringSecondaryText: '10m',
	},
	{
		booleanRead: false,
		stringTitle: 'Jane Anderson',
		stringText: 'Created an event.',
		stringIcon: '💬',
		stringImage: 'J',
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		booleanOnline: true,
		stringSecondaryText: '20m',
	},
	{
		booleanRead: false,
		stringTitle: 'Jessie Morrison',
		stringText: 'Liked your comment.',
		stringIcon: '👍',
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		booleanOnline: false,
		stringImage: undefined,
		stringSecondaryText: undefined,
	},
	{
		booleanRead: false,
		stringTitle: 'Maria Smith',
		stringText: 'Mentioned you in a comment.',
		stringIcon: undefined,
		stringImage:
			'data:image/webp;base64,UklGRu4BAABXRUJQVlA4IOIBAAAQCQCdASooACgAPm0wk0ekIqGhI4z4gA2JZQDO+iAC6AlQPcOz0HPOKL1nTWvTHbiepFNXDrGVecnZ9OVE1C985gnXHCjdkxsmotqpklZN4wAA/vpIayBw3pmdYLqeF+botwQZfzHhh7PN3tq8YmBk7rDQiTDfMXOqv76n3J+s7KIV4avt3ONyJofVPBnj8yq5KohEETG7KW7aJgAL6vgZvipcMv5iKX3ik7NxXkBuUibEPgFj2W3BWj/R6D25pnZpwmdUPW5FfsKGU5MKHsOSLBnzjBp2ASYQp5eshSJ/IhOkSmf4MZ8t546RGueOjxEjufK51rzDxedefpeo5KbDFtAsROmp1/DX4oJPh7zqrpttZHNj0Nr1tHKf+a+dTok3U1cpHavQ+SmWkp62UppgBoH14ZumcIl7S7glGQ3tYl35xku+mNyR3o8+YZZ9Ewdfk60oGwo2gOil8kGVUQjFhheDy6pSawpFPRvSna/8QHc76ngX3CNVRk/Sijw1pY7VKGiogRl3+Ap6NJgmT1Kptk+6AZm98UJuQvScE/J/64Q2MdbMgHk7XbStFaZDIpi7VY7dcBj8UMm+/KhotvHqx5rMpEGcB3SyCf9AjEwHh8I5M/6Yut13VCTlMrAoj4AAAA==',
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		booleanOnline: false,
		stringSecondaryText: undefined,
	},
	{
		booleanRead: false,
		stringTitle: 'Liz Samson',
		stringText: 'Tagged you in a comment.',
		stringIcon: '👤',
		stringImage:
			'data:image/webp;base64,UklGRrgBAABXRUJQVlA4IKwBAACwCQCdASooACgAPm0wk0ekIqGhJzgMkIANiWMAxp1m/ZlWpO+nEauOaH5K3g1qC5BU76pbdU72DeWxVbFRlHlaC4gO9oMXsi/V+AbI0/lbA9uKzDINqAD+uQutH9McUsx4frX3szD2iVF5tuxWxykhN3Cs/DVgxAbg2JWx67aMvm68hY2cU8Y+yOrumUDrc/fMAOUFseW1H5O0MCznZZ1CQzC9j9RPGwIDNDo0YbOkG0kVeJrGZY5Y7vdo0ssiCKJ2GGCHYGft+U3MMyb4Vo7HuJa1ZzngJ+e6fwJ15GciZSXPN473M/fTAD4IAZHWol5qLNvmay3bFiqksYt5A1KlqRom1Uwri7C19oWpFgRpMq9Mi+ERaygvOleSJdU9sXX8dwfIBt24V5kUU6bo+XPpnoZa+sp5kEYgUoxmqjuJ/+3DbeiD15LAYxldRRlA++xAxMMEILqESx+Q3NwQr6ZzmJW1F6qQhlA6TuGO5aP7N/eDp9Mj6Y2W7sjL8aYHs5V/AQ0X9kiXsbo0h415ry8f8VP9k6V0zgy54yf2FTcqOmk2oli10Q3lhDAAAA==',
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		booleanOnline: false,
		stringSecondaryText: undefined,
	},
	{
		booleanRead: false,
		stringTitle: 'Robert Button',
		stringText: 'Liked your comment.',
		stringImage:
			'data:image/webp;base64,UklGRhACAABXRUJQVlA4IAQCAABQCgCdASooACgAPm0wkUakIyGhJy2wgA2JQBWGdmhVkiP9BvfjNVmbcM92OJeBDaVMw8GgYNSf23C9zuomU5n5dE2Qy/55LTycnUTT7HBwtTF5z8dORua8XZaAAP7zdQyV05WD8R2hUqe+NDn/HXuks7Ith5OMfpvHkD9qoaqsNJr5by3dNh+WKZCjSJteadJ7+uMFFY1vVSxe4EfozpMVKOHxm92xGQ9/5Xh0GmvcAoeeGpJEvyyuD4u694lsc1OdIoxSPqr1pHrsBj+ObYnGS8UsFniwxtCa8LIhHg21gfulWylBXFrvQFm5tD8KEsAgYp6nIlBONxYuW5awz/sVOdSEVCMpKkW9DqzWFqC9h6VaJOoL1lDnwmFZ4Fj8Sr99tDO3H+DxUN6wlKcd+Lcv58kFGDuKN4aOJvqw3GLhFVFf/PruRo/qN90Fge27Y6hi19+VGfpdvZKZNagboMBnrOO0xgQtGdUGbGudYRVX2ZJHwoY6iXx4YSvbLMZ2y/iJ1f+P5XJ2tBQ7yYHyA3GHGhpbTAlIfxhZzfNdj/upB8A1k6h6wAU7opCR9OHpRFsWBTvTUsSsqW+Fp2KJUg2tIb4el+SP1MfTaMyzodKOB1Lnx0U6pyoXXT++F3R1/jUgCeKm1vI+ytSCu25tXSwIJPWn4aR0sbtMOgAvyydbjxQAAAA=',
		stringIcon: '👍',
		stringDate: undefined,
		booleanOnline: true,
		stringSecondaryText: undefined,
	},
];
