import { Pipe } from '@angular/core';
import { Config } from './config';

@Pipe({
	name: 'filterList'
})

export class FilterList {
	transform(items: any[], args: any): any[] {
		if (items.length === 0 || args.length < Config.minFilterInput) return items;

		return items.filter(item => {
			return Object.keys(item).some(k => {
				return Config.filterTypes.indexOf(k) > -1 ? new RegExp(args, 'i').test(item[k]) : false;
			});
		});
	}
}