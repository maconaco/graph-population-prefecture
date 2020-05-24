export type GraphData = {
    line: LineGraphData;
    bar: BarGraphData;
}

export type LineGraphData = {
boundaryYear: number;
data: LineGraphRecord[];
}

export type LineGraphRecord = {
year: number;
value: number;
}

export type BarGraphData = {
data: BarGraphRecord[];
}

export type BarGraphRecord = {
year: number;
sum: number;
class: {
    label: string;
    value: number;
}[]
}
