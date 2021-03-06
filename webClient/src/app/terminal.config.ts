

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

export class TerminalConfig {
  constructor(
    public host: string,
    public port: number
  ) {

  }
}

export class ConfigServiceTerminalConfig {
  constructor(
    public _objectType: string,
    public _metadataVersion: string,
    public resource: string,
    public contents: TerminalConfig
  ) {

  }
}



/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

