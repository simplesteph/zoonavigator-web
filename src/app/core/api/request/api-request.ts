/*
 * Copyright (C) 2018  Ľuboš Kozmon
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {RequestContent} from "./request-content";
import {HttpParams} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http/src/headers";

export class ApiRequest<T> {

  constructor(
    public path: string,
    public method: string,
    public params?: HttpParams,
    public headers?: HttpHeaders,
    public content?: RequestContent,
    public authToken?: string
  ) {
  }
}
