import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { Position } from './position';
import { Promotion } from './promotion';


export const clusters: ClusterNode[] = [
    {
      id: 'c1',
      label: 'Level 1',
      childNodeIds: ['1']
    },
    {
        id: 'c2',
        label: 'Level 2',
        childNodeIds: ['3','4']
    },
    {
        id: 'c3',
        label: 'Level 3',
        childNodeIds: ['5','8','2']
    },
    {
        id: 'c4',
        label: 'Level 4',
        childNodeIds: ['10','9','6']
    }
    ,
    {
        id: 'c5',
        label: 'Level 5',
        childNodeIds: ['11','7']
    },
    {
        id: 'c6',
        label: 'Level 6',
        childNodeIds: ['12']
    }
  ];

  
export const positions: Position[] = [
    {
        position_id: '1',
        position_name: 'Member Engineering',
        position_summary: 'Implement task with supervision'
    }, {
        position_id: '2',
        position_name: 'Technical Lead',
        position_summary: 'Technical Lead is responsible review team member code'
    }, {
        position_id: '3',
        position_name: 'Architect',
        position_summary: 'Architect: Role detail'
    }, {
        position_id: '4',
        position_name: 'Principal Technologist',
        position_summary: "Principal Technologist: Role Detail"
    },
    {
        position_id: '5',
        position_name: 'Principle consultant',
        position_summary: 'Principle consultant: Role Detail'
    },
    {
        position_id: '6',
        position_name: 'Program Manager',
        position_summary: 'Program Manager: Role Detail'
    },
    {
        position_id: '7',
        position_name: 'Engineering Manager',
        position_summary: 'Engineering Manager: Role Detail'
    },
    {
        position_id: '8',
        position_name: 'DQA',
        position_summary: 'DQA'
    },
    {
        position_id: '9',
        position_name: 'SQM',
        position_summary: 'SQM'
    },
    {
        position_id: '10',
        position_name: 'SW Delivery Manager',
        position_summary: 'SW Delivery Manager'
    },
    {
        position_id: '11',
        position_name: 'Product Manager',
        position_summary: 'Product Manager'
    },
    {
        position_id: '12',
        position_name: 'Team Lead',
        position_summary: 'Team Lead'
    }
  ];

  export const promotions: Promotion[] = [
    {
        promotion_id: '1',
        start_position_id: '1',
        next_position_id: '2'
    },
    {
        promotion_id: '2',
        start_position_id: '1',
        next_position_id: '3'
    },
    {
        promotion_id: '3',
        start_position_id: '1',
        next_position_id: '4'
    },
    {
        promotion_id: '4',
        start_position_id: '1',
        next_position_id: '5'
    },
    {
        promotion_id: '5',
        start_position_id: '2',
        next_position_id: '9'
    },
    {
        promotion_id: '6',
        start_position_id: '2',
        next_position_id: '10'
    },
    {
        promotion_id: '7',
        start_position_id: '2',
        next_position_id: '11'
    },
    {
        promotion_id: '8',
        start_position_id: '3',
        next_position_id: '2'
    },
    {
        promotion_id: '9',
        start_position_id: '3',
        next_position_id: '8'
    },
    {
        promotion_id: '10',
        start_position_id: '4',
        next_position_id: '5'
    },
    {//check id
        promotion_id: '11',
        start_position_id: '5',
        next_position_id: '6'
    },
    {
        promotion_id: '12',
        start_position_id: '6',
        next_position_id: '7'
    },
     {
        promotion_id: '13',
        start_position_id: '8',
        next_position_id: '9'
    },
     {
        promotion_id: '14',
        start_position_id: '10',
        next_position_id: '11'
    }, {
        promotion_id: '15',
        start_position_id: '11',
        next_position_id: '12'
    }
  ];