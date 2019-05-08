import { Component, OnInit, Input } from '@angular/core';
import { IGoodsItem } from '@interfaces/goods';
import { GoodsService } from '@commons/services/goods/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.sass']
})
/**
 * @description
 * A class views a single goods item
 *
 * @publicApi
 */
export class GoodsComponent implements OnInit {
    @Input() goodsId: string;
    private goodsItem: IGoodsItem;

  constructor(private goodsService: GoodsService) {}

  ngOnInit() {
    this.getGoodsItem( this.goodsId );
  }

  /**
   * @description
   * get single goods item by GoodsService
   *
   * @async
   * @param {string} goodsId
   */

  private getGoodsItem(id: string ): void {
    this.goodsService.getGoodsItem(id)
        .subscribe((goodsItem: IGoodsItem) => {
            this.goodsItem = goodsItem;
        }
    );
  }
}
