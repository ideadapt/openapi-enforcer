/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';

module.exports = InfoObject;

function InfoObject () {
    Object.assign(this, {
        type: 'object',
        properties: {
            title: {
                required: true,
                type: 'string'
            },
            description: {
                type: 'string'
            },
            termsOfService: {
                type: 'string'
            },
            contact: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    url: {
                        type: 'string'
                    },
                    email: {
                        type: 'string'
                    }
                }
            },
            license: {
                type: 'object',
                properties: {
                    name: {
                        required: true,
                        type: 'string'
                    },
                    url: {
                        type: 'string'
                    }
                }
            },
            version: {
                required: true,
                type: 'string'
            }
        }
    });
}