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
        childNodeIds: ['2']
    },
    {
        id: 'c3',
        label: 'Level 3',
        childNodeIds: ['3']
    },
    {
        id: 'c4',
        label: 'Level 4',
        childNodeIds: ['4']
    },
    {
        id: 'c5',
        label: 'Level 5',
        childNodeIds: ['5']
    }
  ];

  
  export const positions: Position[] = [
    {
        position_id: '1',
        position_name: 'Member Engineering',
        position_summary: 'Implement task with supervision'
    },
    {
        position_id: '2',
        position_name: 'Principal Technologist',
        position_summary: "Principal Technologist: Role Detail"
    },
    {
        position_id: '3',
        position_name: 'Principle consultant',
        position_summary: 'Principle consultant: Role Detail'
    },
    {
        position_id: '4',
        position_name: 'Program Manager',
        position_summary: 'Program Manager: Role Detail'
    },
    {
        position_id: '5',
        position_name: 'Engineering Manager',
        position_summary: 'Engineering Manager: Role Detail'
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
        start_position_id: '2',
        next_position_id: '3'
    },
    {
        promotion_id: '3',
        start_position_id: '2',
        next_position_id: '4'
    },
    {
        promotion_id: '4',
        start_position_id: '3',
        next_position_id: '4'
    },
    {
        promotion_id: '5',
        start_position_id: '4',
        next_position_id: '5'
    },
    {
        promotion_id: '6',
        start_position_id: '5',
        next_position_id: '1'
    },
  ];