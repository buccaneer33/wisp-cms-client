import { IGoodsCategory } from './igoods-categories';
import { IGoodsAttributes } from './igoods-attributes';
import { IGoodsStorage } from './igood-storage';

export interface IGoodsItem {
    id: number;
    name: string;
    categories: IGoodsCategory[];
    attributes: IGoodsAttributes[];
    storage: IGoodsStorage[];
    isActive: boolean;
    shortText?: string;
    text?: string;
}
