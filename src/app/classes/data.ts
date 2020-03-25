import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { Position } from './position';
import { Promotion } from './promotion';


export const clusters: ClusterNode[] = [
    {
      id: 'c1',
      label: 'Level 2',
      childNodeIds: ['3', '4','5']
    },
    {
        id: 'c2',
        label: 'Level 3',
        childNodeIds: ['1']
    },
    {
        id: 'c3',
        label: 'Level 1',
        childNodeIds: ['2']
    }
  ];

  
export const positions: Position[] = [
    {
        position_id: '1',
        position_name: 'Financial Manager',
        position_summary: 'Financial managers are responsible for the financial health of an organization. They produce financial reports, direct investment activities, and develop strategies and plans for the long-term financial goals of their organization. Financial managers work in many places, including banks and insurance companies.'
    }, {
        position_id: '2',
        position_name: 'Brokerage clerks',
        position_summary: 'Brokerage clerks work for securities or brokerage firms. They are responsible for preparing and maintaining the records of financial transactions involving stocks, bonds, and other types of investments. Purchase-and-sale clerks match orders to buy with orders to sell and balance and verify stock trades.'
    }, {
        position_id: '3',
        position_name: 'Stock Broker',
        position_summary: 'A stockbroker is a professional who executes buy and sell orders for stocks and other securities on behalf of clients. A stockbroker may also be known as a registered'
    }, {
        position_id: '4',
        position_name: 'Financial Advisor',
        position_summary: "A financial advisor is a professional that provides expertise for clients' decisions around money matters, personal finances, and investments. Financial advisors may work as an independent agent, or may be employed by a larger financial firm. Advisors must be licensed to carry out business with clients."
    },
    {
        position_id: '5',
        position_name: 'Financial Analyst',
        position_summary: 'Financial analysts work in banks, pension funds, insurance companies, and other businesses. Financial analysts provide guidance to businesses and individuals making investment decisions. They assess the performance of stocks, bonds, and other types of investments'
    }
  ];

  export const promotions: Promotion[] = [
    {
        promotion_id: '1',
        start_position_id: '2',
        next_position_id: '4'
    },
    {
        promotion_id: '2',
        start_position_id: '2',
        next_position_id: '3'
    },
    {
        promotion_id: '3',
        start_position_id: '2',
        next_position_id: '5'
    },
    {
        promotion_id: '4',
        start_position_id: '4',
        next_position_id: '1'
    },
    {
        promotion_id: '5',
        start_position_id: '3',
        next_position_id: '1'
    },
    {
        promotion_id: '6',
        start_position_id: '5',
        next_position_id: '1'
    },
  ];