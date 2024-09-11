import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Users>;
@Schema()
export class Users {
  @Prop({required:true, type: String})
  first_name: string

  @Prop({required:true, type: String})
  last_name: string

  // @Prop({ required: true, type: String })
  // password: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: Number })
  mobileno: number;

  @Prop({ required: true, type: String })
  address: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users);
