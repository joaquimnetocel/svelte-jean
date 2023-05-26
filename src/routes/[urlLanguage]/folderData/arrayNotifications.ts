// MODULES:
import type { typeNotificationsArray } from '$lib/index.js';
// IMAGES:
import imageLiz from '../folderImages/folderUsers/imageLiz.webp';
import imageMaria from '../folderImages/folderUsers/imageMaria.webp';
import imageMark from '../folderImages/folderUsers/imageMark.webp';
import imageRobert from '../folderImages/folderUsers/imageRobert.webp';

export const arrayNotifications: typeNotificationsArray = [
	{
		booleanRead: true,
		stringTitle: 'Mark Stuart',
		stringText: 'Mentioned you in a comment.',
		stringIcon: '',
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		stringImage: imageMark,
		booleanOnline: true,
		stringSecondaryText: '10m',
	},
	{
		booleanRead: false,
		stringTitle: 'Jane Anderson',
		stringText: 'Created an event.',
		stringIcon: '',
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
		stringIcon: '',
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
		stringIcon: '',
		stringImage: imageMaria,
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		booleanOnline: false,
		stringSecondaryText: undefined,
	},
	{
		booleanRead: false,
		stringTitle: 'Liz Samson',
		stringText: 'Tagged you in a comment.',
		stringIcon: '',
		stringImage: imageLiz,
		stringDate: `<span class="fw-bold">10:41 AM</span>
		August 7,2021`,
		booleanOnline: false,
		stringSecondaryText: undefined,
	},
	{
		booleanRead: false,
		stringTitle: 'Robert Button',
		stringText: 'Liked your comment.',
		stringImage: imageRobert,
		stringIcon: '',
		stringDate: undefined,
		booleanOnline: true,
		stringSecondaryText: undefined,
	},
];
