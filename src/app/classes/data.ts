import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { Position } from './position';
import { Promotion } from './promotion';
import { CareerPath } from './career-path';


export const clusters: ClusterNode[] = [
    {
        id: 'c1',
        label: 'Level 1',
        childNodeIds: ['Member Engineering'],
    },
    {
        id: 'c2',
        label: 'Level 2',
        childNodeIds: ['Architect', 'Principal Technologist']
    },
    {
        id: 'c3',
        label: 'Level 3',
        childNodeIds: ['Principle consultant', 'DQA', 'Technical Lead']
    },
    {
        id: 'c4',
        label: 'Level 4',
        childNodeIds: ['SW Delivery Manager', 'SQM', 'Program Manager']
    }
    ,
    {
        id: 'c5',
        label: 'Level 5',
        childNodeIds: ['Product Manager', 'Engineering Manager']
    },
    {
        id: 'c6',
        label: 'Level 6',
        childNodeIds: ['Team Lead']
    }
];


export const positions: Position[] = [
    {
        position_id: '1',
        position_name: 'Member Engineering',
        position_summary: 'Implement task with supervision',
        career_path_id: '1'
    }, {
        position_id: '2',
        position_name: 'Technical Lead',
        position_summary: 'Technical Lead is responsible review team member code',
        career_path_id: '3'
    }, {
        position_id: '3',
        position_name: 'Architect',
        position_summary: 'Architect: Role detail',
        career_path_id: '1'
    }, {
        position_id: '4',
        position_name: 'Principal Technologist',
        position_summary: "Principal Technologist: Role Detail",
        career_path_id: '1'
    },
    {
        position_id: '5',
        position_name: 'Principle consultant',
        position_summary: 'Principle consultant: Role Detail',
        career_path_id: '1'
    },
    {
        position_id: '6',
        position_name: 'Program Manager',
        position_summary: 'Program Manager: Role Detail',
        career_path_id: '1'
    },
    {
        position_id: '7',
        position_name: 'Engineering Manager',
        position_summary: 'Engineering Manager: Role Detail',
        career_path_id: '1'
    },
    {
        position_id: '8',
        position_name: 'DQA',
        position_summary: 'DQA',
        career_path_id: '2'
    },
    {
        position_id: '9',
        position_name: 'SQM',
        position_summary: 'SQM',
        career_path_id: '2'
    },
    {
        position_id: '10',
        position_name: 'SW Delivery Manager',
        position_summary: 'SW Delivery Manager',
        career_path_id: '3'
    },
    {
        position_id: '11',
        position_name: 'Product Manager',
        position_summary: 'Product Manager',
        career_path_id: '3'
    },
    {
        position_id: '12',
        position_name: 'Team Lead',
        position_summary: 'Team Lead',
        career_path_id: '3'
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

export const careerPaths: CareerPath[] = [
    {
        career_path_id: '1',
        career_path_name: 'TCP',
        color_code: '#1399A0'
    },
    {
        career_path_id: '2',
        career_path_name: 'PCP',
        color_code: '#0E78C5'
    },
    {
        career_path_id: '3',
        career_path_name: 'LCP',
        color_code: '#67B419'
    }
]