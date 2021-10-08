import imgixUrlParams from 'imgix-url-params/dist/parameters.json';

export type ParamsExpect = {
  [key: string]: any;
};
type Parameters = {
  [key: string]: { expects: ParamsExpect[] } & any;
};
const urlParams: {
  // とりあえず
  parameters: Parameters;
} = imgixUrlParams;

export function paramsKeyToSpread(
  paramsKey: string,
  paramsExpect: ParamsExpect,
  detail: boolean = true
): { label: string; defaultValue: string | number } {
  const p: any = urlParams.parameters[paramsKey];
  if (p) {
    return {
      label: detail
        ? `${p.display_name}(${paramsExpect.type})`
        : p.display_name,
      defaultValue: p.default
    };
  }
  return {
    label: '',
    defaultValue: ''
  };
}

export function paramsKeyDisallowBase64(paramsKey: string): boolean {
  const p: any = urlParams.parameters[paramsKey];
  if (p) {
    return p.disallow_base64 === undefined ? false : p.disallow_base64;
  }
  return false;
}

export function pruneExpects(exp: ParamsExpect[]): ParamsExpect[] {
  const m = exp.map((v) => {
    const r = { ...v };
    if (r.type === 'url' || r.type === 'path') {
      r.type = 'url or path';
    } else if (r.type === 'hex_color' || r.type === 'color_keyword') {
      r.type = 'color';
    }
    return r;
  });
  const u: { [key: string]: ParamsExpect } = {};
  return m.filter((v) => {
    if (u[v.type]) {
      return false;
    }
    u[v.type] = v;
    return true;
  });
}

export function paramsKeyParameters(
  paramsKey: string
): typeof urlParams['parameters'] | undefined {
  return urlParams.parameters[paramsKey];
}

export function expectToRange(
  exp: ParamsExpect
): [number, number | undefined] | undefined {
  if (exp.suggested_range) {
    const max =
      exp.suggested_range.max !== undefined ? exp.suggested_range.max : 500;
    return [exp.suggested_range.min, max];
  }
  return;
}

export function expectIsColor(exp: ParamsExpect): boolean {
  return exp.type === 'color';
}

export function expectToList(exp: ParamsExpect): string[] | undefined {
  if (exp.type === 'list') {
    return exp.possible_values;
  }
  return;
}
