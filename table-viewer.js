// replace node_modules/cdk-dynamo-table-viewer/lib/table-viewer.js

"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableViewer = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const path = require("path");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const constructs_1 = require("constructs");
/**
 * Installs an endpoint in your stack that allows users to view the contents
 * of a DynamoDB table through their browser.
 */
class TableViewer extends constructs_1.Construct {
    constructor(parent, id, props) {
        super(parent, id);
        const handler = new aws_cdk_lib_1.aws_lambda.Function(this, 'Rendered', {
            code: aws_cdk_lib_1.aws_lambda.Code.fromAsset(path.join(__dirname, '..', 'lambda')),
            runtime: aws_cdk_lib_1.aws_lambda.Runtime.NODEJS_18_X,
            handler: 'index.handler',
            role: aws_cdk_lib_1.aws_iam.Role.fromRoleName(this, 'Role', 'LabRole'),
            environment: {
                TABLE_NAME: props.table.tableName,
                TITLE: props.title || '',
                SORT_BY: props.sortBy || '',
            },
        });

        const home = new aws_cdk_lib_1.aws_apigateway.LambdaRestApi(this, 'ViewerEndpoint', {
            handler,
            endpointConfiguration: props.endpointType
                ? { types: [props.endpointType] }
                : undefined,
        });
        this.endpoint = home.url;
    }
}
exports.TableViewer = TableViewer;
_a = JSII_RTTI_SYMBOL_1;
TableViewer[_a] = { fqn: "cdk-dynamo-table-viewer.TableViewer", version: "0.2.488" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RhYmxlLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZCQUE2QjtBQUM3Qiw2Q0FJcUI7QUFDckIsMkNBQXVDO0FBOEJ2Qzs7O0dBR0c7QUFDSCxNQUFhLFdBQVksU0FBUSxzQkFBUztJQUl4QyxZQUFZLE1BQWlCLEVBQUUsRUFBVSxFQUFFLEtBQXVCO1FBQ2hFLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSx3QkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ3BELElBQUksRUFBRSx3QkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sRUFBRSx3QkFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFdBQVcsRUFBRTtnQkFDWCxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUNqQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFO2FBQzVCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSw0QkFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDM0QsT0FBTztZQUNQLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxZQUFZO2dCQUN2QyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyxTQUFTO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7O0FBM0JILGtDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQge1xuICBhd3NfYXBpZ2F0ZXdheSBhcyBhcGlndyxcbiAgYXdzX2xhbWJkYSBhcyBsYW1iZGEsXG4gIGF3c19keW5hbW9kYiBhcyBkeW5hbW9kYixcbn0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVWaWV3ZXJQcm9wcyB7XG4gIC8qKlxuICAgKiBUaGUgZW5kcG9pbnQgdHlwZSBvZiB0aGVcbiAgICogW0xhbWJkYVJlc3RBcGldKGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvYXBpL2xhdGVzdC9kb2NzL0Bhd3MtY2RrX2F3cy1hcGlnYXRld2F5LkxhbWJkYVJlc3RBcGkuaHRtbClcbiAgICogdGhhdCB3aWxsIGJlIGNyZWF0ZWRcbiAgICogQGRlZmF1bHQgLSBFREdFXG4gICAqL1xuICByZWFkb25seSBlbmRwb2ludFR5cGU/OiBhcGlndy5FbmRwb2ludFR5cGU7XG5cbiAgLyoqXG4gICAqIFRoZSBEeW5hbW9EQiB0YWJsZSB0byB2aWV3LiBOb3RlIHRoYXQgYWxsIGNvbnRlbnRzIG9mIHRoaXMgdGFibGUgd2lsbCBiZVxuICAgKiB2aXNpYmxlIHRvIHRoZSBwdWJsaWMuXG4gICAqL1xuICByZWFkb25seSB0YWJsZTogZHluYW1vZGIuSVRhYmxlO1xuXG4gIC8qKlxuICAgKiBUaGUgd2ViIHBhZ2UgdGl0bGUuXG4gICAqIEBkZWZhdWx0IC0gTm8gdGl0bGVcbiAgICovXG4gIHJlYWRvbmx5IHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBjb2x1bW4gdG8gc29ydCBieSwgcHJlZml4IHdpdGggXCItXCIgZm9yIGRlc2NlbmRpbmcgb3JkZXIuXG4gICAqIEBkZWZhdWx0IC0gTm8gc29ydFxuICAgKi9cbiAgcmVhZG9ubHkgc29ydEJ5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEluc3RhbGxzIGFuIGVuZHBvaW50IGluIHlvdXIgc3RhY2sgdGhhdCBhbGxvd3MgdXNlcnMgdG8gdmlldyB0aGUgY29udGVudHNcbiAqIG9mIGEgRHluYW1vREIgdGFibGUgdGhyb3VnaCB0aGVpciBicm93c2VyLlxuICovXG5leHBvcnQgY2xhc3MgVGFibGVWaWV3ZXIgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuXG4gIHB1YmxpYyByZWFkb25seSBlbmRwb2ludDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudDogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVGFibGVWaWV3ZXJQcm9wcykge1xuICAgIHN1cGVyKHBhcmVudCwgaWQpO1xuXG4gICAgY29uc3QgaGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ1JlbmRlcmVkJywge1xuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdsYW1iZGEnKSksXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMThfWCxcbiAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIFRBQkxFX05BTUU6IHByb3BzLnRhYmxlLnRhYmxlTmFtZSxcbiAgICAgICAgVElUTEU6IHByb3BzLnRpdGxlIHx8ICcnLFxuICAgICAgICBTT1JUX0JZOiBwcm9wcy5zb3J0QnkgfHwgJycsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcHJvcHMudGFibGUuZ3JhbnRSZWFkRGF0YShoYW5kbGVyKTtcblxuICAgIGNvbnN0IGhvbWUgPSBuZXcgYXBpZ3cuTGFtYmRhUmVzdEFwaSh0aGlzLCAnVmlld2VyRW5kcG9pbnQnLCB7XG4gICAgICBoYW5kbGVyLFxuICAgICAgZW5kcG9pbnRDb25maWd1cmF0aW9uOiBwcm9wcy5lbmRwb2ludFR5cGVcbiAgICAgICAgPyB7IHR5cGVzOiBbcHJvcHMuZW5kcG9pbnRUeXBlXSB9XG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICAgIHRoaXMuZW5kcG9pbnQgPSBob21lLnVybDtcbiAgfVxufVxuIl19