import React from 'react';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import { TitleProps } from 'antd/es/typography/Title';
import { LinkProps } from 'antd/es/typography/Link';
import { ParagraphProps } from 'antd/es/typography/Paragraph';
// import '../../index.scss';

type CoreTypography = TextProps &
  TitleProps &
  LinkProps &
  ParagraphProps & {
    sizeProps: 'xxxl' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
    typeProps: 'heading' | 'detail' | 'body';
    weight?: 'light' | 'regular' | 'semibold' | 'bold';
    family?: 'sans-serif' | 'serif';
    className?: string;
    variantData?: 'text' | 'title' | 'paragraph' | 'link';
    content?: string;
    color?: string;
  };
const { Text, Title, Paragraph, Link } = Typography;
export const CoreTypography = (props: CoreTypography) => {
  const {
    variantData,
    sizeProps,
    typeProps,
    weight = 'light',
    family = 'sans-serif',
    content,
    color,
    className,
    ...restProps
  } = props;

  const weightProps = weight || 'light';
  const familyProps = family || 'sans-serif';
  return (
    /* eslint-disable */
    <>
      {variantData === 'text' ? (
        <Text
          {...restProps}
          className={`family-custom-${familyProps} size-custom-${typeProps}-${sizeProps} weight-custom-${weightProps} ${
            color ? `mx-color-${color}` : ''
          } ${className}`}
        >
          {content}
        </Text>
      ) : variantData === 'title' ? (
        <Title
          {...restProps}
          className={`family-custom-${familyProps} size-custom-${typeProps}-${sizeProps} weight-custom-${weightProps} ${
            color ? `mx-color-${color}` : ''
          } ${className}`}
        >
          {content}
        </Title>
      ) : variantData === 'paragraph' ? (
        <Paragraph
          {...restProps}
          className={`family-custom-${familyProps} size-custom-${typeProps}-${sizeProps} weight-custom-${weightProps} ${
            color ? `mx-color-${color}` : ''
          }  ${className}`}
        >
          {content}
        </Paragraph>
      ) : variantData === 'link' ? (
        <Link
          {...restProps}
          className={`family-custom-${familyProps} size-custom-${typeProps}-${sizeProps} weight-custom-${weightProps} ${
            color ? `mx-color-${color}` : ''
          } ${className}`}
        >
          {content}
        </Link>
      ) : (
        <Text
          {...restProps}
          className={`family-custom-${familyProps} size-custom-${typeProps}-${sizeProps} weight-custom-${weightProps} mx-color-${color}`}
        >
          {content}
        </Text>
      )}
    </>
    /* eslint-disable */
  );
};
