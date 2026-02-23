// @ts-nocheck
import React, { useState } from 'react';
import { BookOpen, HelpCircle, FileText, List, ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';

const gurbaniText = [
{ id: 0, stanza: "ਮੂਲ ਮੰਤਰ", lines: ["ੴ ਸਤਿਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰਪ੍ਰਸਾਦਿ ॥", "॥ ਜਪੁ ॥", "ਆਦਿ ਸਚੁ ਜੁਗਾਦਿ ਸਚੁ ॥", "ਹੈ ਭੀ ਸਚੁ ਨਾਨਕ ਹੋਸੀ ਭੀ ਸਚੁ ॥੧॥"] },
{ id: 1, stanza: "ਪਉੜੀ ੧", lines: ["ਸੋਚੈ ਸੋਚਿ ਨ ਹੋਵਈ ਜੇ ਸੋਚੀ ਲਖ ਵਾਰ ॥", "ਚੁਪੈ ਚੁਪਿ ਨ ਹੋਵਈ ਜੇ ਲਾਇ ਰਹਾ ਲਿਵ ਤਾਰ ॥", "ਭੁਖਿਆ ਭੁਖ ਨ ਉਤਰੀ ਜੇ ਬੰਨਾ ਪੁਰੀਆ ਭਾਰ ॥", "ਸਹਸ ਸਿਆਣਪਾ ਲਖ ਹੋਹਿ ਤ ਇਕ ਨ ਚਲੈ ਨਾਲਿ ॥", "ਕਿਵ ਸਚਿਆਰਾ ਹੋਈਐ ਕਿਵ ਕੂੜੈ ਤੁਟੈ ਪਾਲਿ ॥", "ਹੁਕਮਿ ਰਜਾਈ ਚਲਣਾ ਨਾਨਕ ਲਿਖਿਆ ਨਾਲਿ ॥੧॥"] },
{ id: 2, stanza: "ਪਉੜੀ ੨", lines: ["ਹੁਕਮੀ ਹੋਵਨਿ ਆਕਾਰ ਹੁਕਮੁ ਨ ਕਹਿਆ ਜਾਈ ॥", "ਹੁਕਮੀ ਹੋਵਨਿ ਜੀਅ ਹੁਕਮਿ ਮਿਲੈ ਵਡਿਆਈ ॥", "ਹੁਕਮੀ ਉਤਮੁ ਨੀਚੁ ਹੁਕਮਿ ਲਿਖਿ ਦੁਖ ਸੁਖ ਪਾਈਅਹਿ ॥", "ਇਕਨਾ ਹੁਕਮੀ ਬਖਸੀਸ ਇਕਿ ਹੁਕਮੀ ਸਦਾ ਭਵਾਈਅਹਿ ॥", "ਹੁਕਮੈ ਅੰਦਰਿ ਸਭੁ ਕੋ ਬਾਹਰਿ ਹੁਕਮ ਨ ਕੋਇ ॥", "ਨਾਨਕ ਹੁਕਮੈ ਜੇ ਬੁਝੈ ਤ ਹਉਮੈ ਕਹੈ ਨ ਕੋਇ ॥੨॥"] },
{ id: 3, stanza: "ਪਉੜੀ ੩", lines: ["ਗਾਵੈ ਕੋ ਤਾਣੁ ਹੋਵੈ ਕਿਸੈ ਤਾਣੁ ॥", "ਗਾਵੈ ਕੋ ਦਾਤਿ ਜਾਣੈ ਨੀਸਾਣੁ ॥", "ਗਾਵੈ ਕੋ ਗੁਣ ਵਡਿਆਈਆ ਚਾਰ ॥", "ਗਾਵੈ ਕੋ ਵਿਦਿਆ ਵਿਖਮੁ ਵੀਚਾਰੁ ॥", "ਗਾਵੈ ਕੋ ਸਾਜਿ ਕਰੇ ਤਨੁ ਖੇਹ ॥", "ਗਾਵੈ ਕੋ ਜੀਅ ਲੈ ਫਿਰਿ ਦੇਹ ॥", "ਗਾਵੈ ਕੋ ਜਾਪੈ ਦਿਸੈ ਦੂਰਿ ॥", "ਗਾਵੈ ਕੋ ਵੇਖੈ ਹਾਦਰਾ ਹਦੂਰਿ ॥", "ਕਥਨਾ ਕਥੀ ਨ ਆਵੈ ਤੋਟਿ ॥", "ਕਥਿ ਕਥਿ ਕਥੀ ਕੋਟੀ ਕੋਟਿ ਕੋਟਿ ॥", "ਦੇਦਾ ਦੇ ਲੈਦੇ ਥਕਿ ਪਾਹਿ ॥", "ਜੁਗਾ ਜੁਗੰਤਰਿ ਖਾਹੀ ਖਾਹਿ ॥", "ਹੁਕਮੀ ਹੁਕਮੁ ਚਲਾਏ ਰਾਹੁ ॥", "ਨਾਨਕ ਵਿਗਸੈ ਵੇਪਰਵਾਹੁ ॥੩॥"] },
{ id: 4, stanza: "ਪਉੜੀ ੪", lines: ["ਸਾਚਾ ਸਾਹਿਬੁ ਸਾਚੁ ਨਾਇ ਭਾਖਿਆ ਭਾਉ ਅਪਾਰੁ ॥", "ਆਖਹਿ ਮੰਗਹਿ ਦੇਹਿ ਦੇਹਿ ਦਾਤਿ ਕਰੇ ਦਾਤਾਰੁ ॥", "ਫੇਰਿ ਕਿ ਅਗੈ ਰਖੀਐ ਜਿਤੁ ਦਿਸੈ ਦਰਬਾਰੁ ॥", "ਮੁਹੌ ਕਿ ਬੋਲਣੁ ਬੋਲੀਐ ਜਿਤੁ ਸੁਣਿ ਧਰੇ ਪਿਆਰੁ ॥", "ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਸਚੁ ਨਾਉ ਵਡਿਆਈ ਵੀਚਾਰੁ ॥", "ਕਰਮੀ ਆਵੈ ਕਪੜਾ ਨਦਰੀ ਮੋਖੁ ਦੁਆਰੁ ॥", "ਨਾਨਕ ਏਵੈ ਜਾਣੀਐ ਸਭੁ ਆਪੇ ਸਚਿਆਰੁ ॥੪॥"] },
{ id: 5, stanza: "ਪਉੜੀ ੫", lines: ["ਥਾਪਿਆ ਨ ਜਾਇ ਕੀਤਾ ਨ ਹੋਇ ॥", "ਆਪੇ ਆਪਿ ਨਿਰੰਜਨੁ ਸੋਇ ॥", "ਜਿਨਿ ਸੇਵਿਆ ਤਿਨਿ ਪਾਇਆ ਮਾਨੁ ॥", "ਨਾਨਕ ਗਾਵੀਐ ਗੁਣੀ ਨਿਧਾਨੁ ॥", "ਗਾਵੀਐ ਸੁਣੀਐ ਮਨਿ ਰਖੀਐ ਭਾਉ ॥", "ਦੁਖੁ ਪਰਹਰਿ ਸੁਖੁ ਘਰਿ ਲੈ ਜਾਇ ॥", "ਗੁਰਮੁਖਿ ਨਾਦੰ ਗੁਰਮੁਖਿ ਵੇਦੰ ਗੁਰਮੁਖਿ ਰਹਿਆ ਸਮਾਈ ॥", "ਗੁਰੁ ਈਸਰੁ ਗੁਰੁ ਗੋਰਖੁ ਬਰਮਾ ਗੁਰੁ ਪਾਰਬਤੀ ਮਾਈ ॥", "ਜੇ ਹਉ ਜਾਣਾ ਆਖਾ ਨਾਹੀ ਕਹਣਾ ਕਥਨੁ ਨ ਜਾਈ ॥", "ਗੁਰਾ ਇਕ ਦੇਹਿ ਬੁਝਾਈ ॥", "ਸਭਨਾ ਜੀਆ ਕਾ ਇਕੁ ਦਾਤਾ ਸੋ ਮੈ ਵਿਸਰਿ ਨ ਜਾਈ ॥੫॥"] },
{ id: 6, stanza: "ਪਉੜੀ ੬", lines: ["ਤੀਰਥਿ ਨਾਵਾ ਜੇ ਤਿਸੁ ਭਾਵਾ ਵਿਣੁ ਭਾਣੇ ਕਿ ਨਾਇ ਕਰੀ ॥", "ਜੇਤੀ ਸਿਰਠਿ ਉਪਾਈ ਵੇਖਾ ਵਿਣੁ ਕਰਮਾ ਕਿ ਮਿਲੈ ਲਈ ॥", "ਮਤਿ ਵਿਚਿ ਰਤਨ ਜਵਾਹਰ ਮਾਣਿਕ ਜੇ ਇਕ ਗੁਰ ਕੀ ਸਿਖ ਸੁਣੀ ॥", "ਗੁਰਾ ਇਕ ਦੇਹਿ ਬੁਝਾਈ ॥", "ਸਭਨਾ ਜੀਆ ਕਾ ਇਕੁ ਦਾਤਾ ਸੋ ਮੈ ਵਿਸਰਿ ਨ ਜਾਈ ॥੬॥"] },
{ id: 7, stanza: "ਪਉੜੀ ੭", lines: ["ਜੇ ਜੁਗ ਚਾਰੇ ਆਰਜਾ ਹੋਰ ਦਸੂਣੀ ਹੋਇ ॥", "ਨਵਾ ਖੰਡਾ ਵਿਚਿ ਜਾਣੀਐ ਨਾਲਿ ਚਲੈ ਸਭੁ ਕੋਇ ॥", "ਚੰਗਾ ਨਾਉ ਰਖਾਇ ਕੈ ਜਸੁ ਕੀਰਤਿ ਜਗਿ ਲੇਇ ॥", "ਜੇ ਤਿਸੁ ਨਦਰਿ ਨ ਆਵਈ ਤ ਵਾਤ ਨ ਪੁਛੈ ਕੇ ॥", "ਕੀਟਾ ਅੰਦਰਿ ਕੀਟੁ ਕਰਿ ਦੋਸੀ ਦੋਸੁ ਧਰੇ ॥", "ਨਾਨਕ ਨਿਰਗੁਣਿ ਗੁਣੁ ਕਰੇ ਗੁਣਵੰਤਿਆ ਗੁਣੁ ਦੇ ॥", "ਤੇਹਾ ਕੋਇ ਨ ਸੁਝਈ ਜਿ ਤਿਸੁ ਗੁਣੁ ਕੋਇ ਕਰੇ ॥੭॥"] },
{ id: 8, stanza: "ਪਉੜੀ ੮", lines: ["ਸੁਣਿਐ ਸਿਧ ਪੀਰ ਸੁਰਿ ਨਾਥ ॥", "ਸੁਣਿਐ ਧਰਤਿ ਧਵਲ ਆਕਾਸ ॥", "ਸੁਣਿਐ ਦੀਪ ਲੋਅ ਪਾਤਾਲ ॥", "ਸੁਣਿਐ ਪੋਹਿ ਨ ਸਕੈ ਕਾਲੁ ॥", "ਨਾਨਕ ਭਗਤਾ ਸਦਾ ਵਿਗਾਸੁ ॥", "ਸੁਣਿਐ ਦੂਖ ਪਾਪ ਕਾ ਨਾਸੁ ॥੮॥"] },
{ id: 9, stanza: "ਪਉੜੀ ੯", lines: ["ਸੁਣਿਐ ਈਸਰੁ ਬਰਮਾ ਇੰਦੁ ॥", "ਸੁਣਿਐ ਮੁਖਿ ਸਾਲਾਹਣ ਮੰਦੁ ॥", "ਸੁਣਿਐ ਜੋਗ ਜੁਗਤਿ ਤਨਿ ਭੇਦ ॥", "ਸੁਣਿਐ ਸਾਸਤ ਸਿਮ੍ਰਿਤਿ ਵੇਦ ॥", "ਨਾਨਕ ਭਗਤਾ ਸਦਾ ਵਿਗਾਸੁ ॥", "ਸੁਣਿਐ ਦੂਖ ਪਾਪ ਕਾ ਨਾਸੁ ॥੯॥"] },
{ id: 10, stanza: "ਪਉੜੀ ੧੦", lines: ["ਸੁਣਿਐ ਸਤੁ ਸੰਤੋਖੁ ਗਿਆਨੁ ॥", "ਸੁਣਿਐ ਅਠਸਠਿ ਕਾ ਇਸਨਾਨੁ ॥", "ਸੁਣਿਐ ਪੜਿ ਪੜਿ ਪਾਵਹਿ ਮਾਨੁ ॥", "ਸੁਣਿਐ ਲਾਗੈ ਸਹਜਿ ਧਿਆਨੁ ॥", "ਨਾਨਕ ਭਗਤਾ ਸਦਾ ਵਿਗਾਸੁ ॥", "ਸੁਣਿਐ ਦੂਖ ਪਾਪ ਕਾ ਨਾਸੁ ॥੧੦॥"] },
{ id: 11, stanza: "ਪਉੜੀ ੧੧", lines: ["ਸੁਣਿਐ ਸਰਾ ਗੁਣਾ ਕੇ ਗਾਹ ॥", "ਸੁਣਿਐ ਸੇਖ ਪੀਰ ਪਾਤਿਸਾਹ ॥", "ਸੁਣਿਐ ਅੰਧੇ ਪਾਵਹਿ ਰਾਹੁ ॥", "ਸੁਣਿਐ ਹਾਥ ਹੋਵੈ ਅਸਗਾਹੁ ॥", "ਨਾਨਕ ਭਗਤਾ ਸਦਾ ਵਿਗਾਸੁ ॥", "ਸੁਣਿਐ ਦੂਖ ਪਾਪ ਕਾ ਨਾਸੁ ॥੧੧॥"] },
{ id: 12, stanza: "ਪਉੜੀ ੧੨", lines: ["ਮੰਨੇ ਕੀ ਗਤਿ ਕਹੀ ਨ ਜਾਇ ॥", "ਜੇ ਕੋ ਕਹੈ ਪਿਛੈ ਪਛੁਤਾਇ ॥", "ਕਾਗਦਿ ਕਲਮ ਨ ਲਿਖਣਹਾਰੁ ॥", "ਮੰਨੇ ਕਾ ਬਹਿ ਕਰਨਿ ਵੀਚਾਰੁ ॥", "ਐਸਾ ਨਾਮੁ ਨਿਰੰਜਨੁ ਹੋਇ ॥", "ਜੇ ਕੋ ਮੰਨਿ ਜਾਣੈ ਮਨਿ ਕੋਇ ॥੧੨॥"] },
{ id: 13, stanza: "ਪਉੜੀ ੧੩", lines: ["ਮੰਨੈ ਸੁਰਤਿ ਹੋਵੈ ਮਨਿ ਬੁਧਿ ॥", "ਮੰਨੈ ਸਗਲ ਭਵਣ ਕੀ ਸੁਧਿ ॥", "ਮੰਨੈ ਮੁਹਿ ਚੋਟਾ ਨਾ ਖਾਇ ॥", "ਮੰਨੈ ਜਮ ਕੈ ਸਾਥਿ ਨ ਜਾਇ ॥", "ਐਸਾ ਨਾਮੁ ਨਿਰੰਜਨੁ ਹੋਇ ॥", "ਜੇ ਕੋ ਮੰਨਿ ਜਾਣੈ ਮਨਿ ਕੋਇ ॥੧੩॥"] },
{ id: 14, stanza: "ਪਉੜੀ ੧੪", lines: ["ਮੰਨੈ ਮਾਰਗਿ ਠਾਕ ਨ ਪਾਇ ॥", "ਮੰਨੈ ਪਤਿ ਸਿਉ ਪਰਗਟੁ ਜਾਇ ॥", "ਮੰਨੈ ਮਗੁ ਨ ਚਲੈ ਪੰਥੁ ॥", "ਮੰਨੈ ਧਰਮ ਸੇਤੀ ਸਨਬੰਧੁ ॥", "ਐਸਾ ਨਾਮੁ ਨਿਰੰਜਨੁ ਹੋਇ ॥", "ਜੇ ਕੋ ਮੰਨਿ ਜਾਣੈ ਮਨਿ ਕੋਇ ॥੧੪॥"] },
{ id: 15, stanza: "ਪਉੜੀ ੧੫", lines: ["ਮੰਨੈ ਪਾਵਹਿ ਮੋਖੁ ਦੁਆਰੁ ॥", "ਮੰਨੈ ਪਰਵਾਰੈ ਸਾਧਾਰੁ ॥", "ਮੰਨੈ ਤਰੈ ਤਾਰੇ ਗੁਰੁਸਿਖ ॥", "ਮੰਨੈ ਨਾਨਕ ਭਵਹਿ ਨ ਭਿਖ ॥", "ਐਸਾ ਨਾਮੁ ਨਿਰੰਜਨੁ ਹੋਇ ॥", "ਜੇ ਕੋ ਮੰਨਿ ਜਾਣੈ ਮਨਿ ਕੋਇ ॥੧੫॥"] },
{ id: 16, stanza: "ਪਉੜੀ ੧੬", lines: ["ਪੰਚ ਪਰਵਾਣ ਪੰਚ ਪਰਧਾਨੁ ॥", "ਪੰਚੇ ਪਾਵਹਿ ਦਰਗਹਿ ਮਾਨੁ ॥", "ਪੰਚੇ ਸੋਹਹਿ ਦਰਿ ਰਾਜਾਨੁ ॥", "ਪੰਚਾ ਕਾ ਗੁਰੁ ਏਕੁ ਧਿਆਨੁ ॥", "ਜੇ ਕੋ ਕਹੈ ਕਰੈ ਵੀਚਾਰੁ ॥", "ਕਰਤੇ ਕੈ ਕਰਣੈ ਨਾਹੀ ਸੁਮਾਰੁ ॥", "ਧੌਲੁ ਧਰਮੁ ਦਇਆ ਕਾ ਪੂਤੁ ॥", "ਸੰਤੋਖੁ ਥਾਪਿ ਰਖਿਆ ਜਿਨਿ ਸੂਤਿ ॥", "ਜੇ ਕੋ ਬੁਝੈ ਹੋਵੈ ਸਚਿਆਰੁ ॥", "ਧਵਲੈ ਉਪਰਿ ਕੇਤਾ ਭਾਰੁ ॥", "ਧਰਤੀ ਹੋਰੁ ਪਰੈ ਹੋਰੁ ਹੋਰੁ ॥", "ਤਿਸ ਤੇ ਭਾਰੁ ਤਲੈ ਕਵਣੁ ਜੋਰੁ ॥", "ਜੀਅ ਜਾਤਿ ਰੰਗਾ ਕੇ ਨਾਵ ॥", "ਸਭਨਾ ਲਿਖਿਆ ਵੁੜੀ ਕਲਾਮ ॥", "ਏਹੁ ਲੇਖਾ ਲਿਖਿ ਜਾਣੈ ਕੋਇ ॥", "ਲੇਖਾ ਲਿਖਿਆ ਕੇਤਾ ਹੋਇ ॥", "ਕੇਤਾ ਤਾਣੁ ਸੁਆਲਿਹੁ ਰੂਪੁ ॥", "ਕੇਤੀ ਦਾਤਿ ਜਾਣੈ ਕੌਣੁ ਕੂਤੁ ॥", "ਕੀਤਾ ਪਸਾਉ ਏਕੋ ਕਵਾਉ ॥", "ਤਿਸ ਤੇ ਹੋਏ ਲਖ ਦਰੀਆਉ ॥", "ਕੁਦਰਤਿ ਕਵਣ ਕਹਾ ਵੀਚਾਰੁ ॥", "ਵਾਰਿਆ ਨ ਜਾਵਾ ਏਕ ਵਾਰ ॥", "ਜੋ ਤੁਧੁ ਭਾਵੈ ਸਾਈ ਭਲੀ ਕਾਰ ॥", "ਤੂ ਸਦਾ ਸਲਾਮਤਿ ਨਿਰੰਕਾਰ ॥੧੬॥"] },
{ id: 17, stanza: "ਪਉੜੀ ੧੭", lines: ["ਅਸੰਖ ਜਪ ਅਸੰਖ ਭਾਉ ॥", "ਅਸੰਖ ਪੂਜਾ ਅਸੰਖ ਤਪ ਤਾਉ ॥", "ਅਸੰਖ ਗਰੰਥ ਮੁਖਿ ਵੇਦ ਪਾਠ ॥", "ਅਸੰਖ ਜੋਗ ਮਨਿ ਰਹਹਿ ਉਦਾਸ ॥", "ਅਸੰਖ ਭਗਤ ਗੁਣ ਗਿਆਨ ਵੀਚਾਰ ॥", "ਅਸੰਖ ਸਤੀ ਅਸੰਖ ਦਾਤਾਰ ॥", "ਅਸੰਖ ਸੂਰ ਮੁਹ ਭਖ ਸਾਰ ॥", "ਅਸੰਖ ਮੋਨਿ ਲਿਵ ਲਾਇ ਤਾਰ ॥", "ਕੁਦਰਤਿ ਕਵਣ ਕਹਾ ਵੀਚਾਰੁ ॥", "ਵਾਰਿਆ ਨ ਜਾਵਾ ਏਕ ਵਾਰ ॥", "ਜੋ ਤੁਧੁ ਭਾਵੈ ਸਾਈ ਭਲੀ ਕਾਰ ॥", "ਤੂ ਸਦਾ ਸਲਾਮਤਿ ਨਿਰੰਕਾਰ ॥੧੭॥"] },
{ id: 18, stanza: "ਪਉੜੀ ੧੮", lines: ["ਅਸੰਖ ਮੂਰਖ ਅੰਧ ਘੋਰ ॥", "ਅਸੰਖ ਚੋਰ ਹਰਾਮਖੋਰ ॥", "ਅਸੰਖ ਅਮਰ ਕਰਿ ਜਾਹਿ ਜੋਰ ॥", "ਅਸੰਖ ਗਲਵਢ ਹਤਿਆ ਕਮਾਹਿ ॥", "ਅਸੰਖ ਪਾਪੀ ਪਾਪੁ ਕਰਿ ਜਾਹਿ ॥", "ਅਸੰਖ ਕੂੜਿਆਰ ਕੂੜੇ ਫਿਰਾਹਿ ॥", "ਅਸੰਖ ਮਲੇਛ ਮਲੁ ਭਖਿ ਖਾਹਿ ॥", "ਅਸੰਖ ਨਿੰਦਕ ਸਿਰਿ ਕਰਹਿ ਭਾਰੁ ॥", "ਨਾਨਕੁ ਨੀਚੁ ਕਹੈ ਵੀਚਾਰੁ ॥", "ਵਾਰਿਆ ਨ ਜਾਵਾ ਏਕ ਵਾਰ ॥", "ਜੋ ਤੁਧੁ ਭਾਵੈ ਸਾਈ ਭਲੀ ਕਾਰ ॥", "ਤੂ ਸਦਾ ਸਲਾਮਤਿ ਨਿਰੰਕਾਰ ॥੧੮॥"] },
{ id: 19, stanza: "ਪਉੜੀ ੧੯", lines: ["ਅਸੰਖ ਨਾਵ ਅਸੰਖ ਥਾਵ ॥", "ਅਗੰਮ ਅਗੰਮ ਅਸੰਖ ਲੋਅ ॥", "ਅਸੰਖ ਕਹਹਿ ਸਿਰਿ ਭਾਰੁ ਹੋਇ ॥", "ਅਖਰੀ ਨਾਮੁ ਅਖਰੀ ਸਾਲਾਹ ॥", "ਅਖਰੀ ਗਿਆਨੁ ਗੀਤ ਗੁਣ ਗਾਹ ॥", "ਅਖਰੀ ਲਿਖਣੁ ਬੋਲਣੁ ਬਾਣਿ ॥", "ਅਖਰਾ ਸਿਰਿ ਸੰਜੋਗੁ ਵਖਾਣਿ ॥", "ਜਿਨਿ ਏਹਿ ਲਿਖੇ ਤਿਸੁ ਸਿਰਿ ਨਾਹਿ ॥", "ਜਿਵ ਫੁਰਮਾਏ ਤਿਵ ਤਿਵ ਪਾਹਿ ॥", "ਜੇਤਾ ਕੀਤਾ ਤੇਤਾ ਨਾਉ ॥", "ਵਿਣੁ ਨਾਵੈ ਨਾਹੀ ਕੋ ਥਾਉ ॥", "ਕੁਦਰਤਿ ਕਵਣ ਕਹਾ ਵੀਚਾਰੁ ॥", "ਵਾਰਿਆ ਨ ਜਾਵਾ ਏਕ ਵਾਰ ॥", "ਜੋ ਤੁਧੁ ਭਾਵੈ ਸਾਈ ਭਲੀ ਕਾਰ ॥", "ਤੂ ਸਦਾ ਸਲਾਮਤਿ ਨਿਰੰਕਾਰ ॥੧੯॥"] },
{ id: 20, stanza: "ਪਉੜੀ ੨੦", lines: ["ਭਰੀਐ ਹਥੁ ਪੈਰੁ ਤਨੁ ਦੇਹ ॥", "ਪਾਣੀ ਧੋਤੈ ਉਤਰ ਸੁ ਖੇਹ ॥", "ਮੂਤ ਪਲੀਤੀ ਕਪੜੁ ਹੋਇ ॥", "ਦੇ ਸਾਬੂਣੁ ਲਈਐ ਓਹੁ ਧੋਇ ॥", "ਭਰੀਐ ਮਤਿ ਪਾਪਾ ਕੈ ਸੰਗਿ ॥", "ਓਹੁ ਧੋਪੈ ਨਾਵੈ ਕੈ ਰੰਗਿ ॥", "ਪੁੰਨੀ ਪਾਪੀ ਆਖਣੁ ਨਾਹਿ ॥", "ਕਰਿ ਕਰਿ ਕਰਣਾ ਲਿਖਿ ਲੈ ਜਾਹੁ ॥", "ਆਪੇ ਬੀਜਿ ਆਪੇ ਹੀ ਖਾਹੁ ॥", "ਨਾਨਕ ਹੁਕਮੀ ਆਵਹੁ ਜਾਹੁ ॥੨੦॥"] },
{ id: 21, stanza: "ਪਉੜੀ ੨੧", lines: ["ਤੀਰਥੁ ਤਪੁ ਦਇਆ ਦਤੁ ਦਾਨੁ ॥", "ਜੇ ਕੋ ਪਾਵੈ ਤਿਲ ਕਾ ਮਾਨੁ ॥", "ਸੁਣਿਆ ਮੰਨਿਆ ਮਨਿ ਕੀਤਾ ਭਾਉ ॥", "ਅੰਤਰਗਤਿ ਤੀਰਥਿ ਮਲਿ ਨਾਉ ॥", "ਸਭਿ ਗੁਣ ਤੇਰੇ ਮੈ ਨਾਹੀ ਕੋਇ ॥", "ਵਿਣੁ ਗੁਣ ਕੀਤੇ ਭਗਤਿ ਨ ਹੋਇ ॥", "ਸੁਅਸਤਿ ਆਥਿ ਬਾਣੀ ਬਰਮਾਉ ॥", "ਸਤਿ ਸੁਹਾਣੁ ਸਦਾ ਮਨਿ ਚਾਉ ॥", "ਕਵਣੁ ਸੁ ਵੇਲਾ ਵਖਤੁ ਕਵਣੁ ਕਵਣ ਥਿਤਿ ਕਵਣੁ ਵਾਰੁ ॥", "ਕਵਣਿ ਸਿ ਰੁਤੀ ਮਾਹੁ ਕਵਣੁ ਜਿਤੁ ਹੋਆ ਆਕਾਰੁ ॥", "ਵੇਲ ਨ ਪਾਈਆ ਪੰਡਤੀ ਜਿ ਹੋਵੈ ਲੇਖੁ ਪੁਰਾਣੁ ॥", "ਵਖਤੁ ਨ ਪਾਇਓ ਕਾਦੀਆ ਜਿ ਲਿਖਨਿ ਲੇਖੁ ਕੁਰਾਣੁ ॥", "ਥਿਤਿ ਵਾਰੁ ਨਾ ਜੋਗੀ ਜਾਣੈ ਰੁਤਿ ਮਾਹੁ ਨਾ ਕੋਈ ॥", "ਜਾ ਕਰਤਾ ਸਿਰਠੀ ਕਉ ਸਾਜੇ ਆਪੇ ਜਾਣੈ ਸੋਈ ॥", "ਕਿਵ ਕਰਿ ਆਖਾ ਕਿਵ ਸਾਲਾਹੀ ਕਿਉ ਵਰਨੀ ਕਿਵ ਜਾਣਾ ॥", "ਨਾਨਕ ਆਖਣਿ ਸਭੁ ਕੋ ਆਖੈ ਇਕਦੂ ਇਕੁ ਸਿਆਣਾ ॥", "ਵਡਾ ਸਾਹਿਬੁ ਵਡੀ ਨਾਈ ਕੀਤਾ ਜਾ ਕਾ ਹੋਵੈ ॥", "ਨਾਨਕ ਜੇ ਕੋ ਆਪੌ ਜਾਣੈ ਅਗੈ ਗਇਆ ਨ ਸੋਹੈ ॥੨੧॥"] },
{ id: 22, stanza: "ਪਉੜੀ ੨੨", lines: ["ਪਾਤਾਲਾ ਪਾਤਾਲ ਲਖ ਆਗਾਸਾ ਆਗਾਸ ॥", "ਓੜਕ ਓੜਕ ਭਾਲਿ ਥਕੇ ਵੇਦ ਕਹਨਿ ਇਕ ਵਾਤ ॥", "ਸਹਸ ਅਠਾਰਹ ਕਹਨਿ ਕਤੇਬਾ ਅਸੁਲੂ ਇਕੁ ਧਾਤੁ ॥", "ਲੇਖਾ ਹੋਇ ਤ ਲਿਖੀਐ ਲੇਖੈ ਹੋਇ ਵਿਣਾਸੁ ॥", "ਨਾਨਕ ਵਡਾ ਆਖੀਐ ਆਪੇ ਜਾਣੈ ਆਪੁ ॥੨੨॥"] },
{ id: 23, stanza: "ਪਉੜੀ ੨੩", lines: ["ਸਾਲਾਹੀ ਸਾਲਾਹਿ ਏਤੀ ਸੁਰਤਿ ਨ ਪਾਈਆ ॥", "ਨਦੀਆ ਅਤੈ ਵਾਹ ਪਵਹਿ ਸਮੁੰਦਿ ਨ ਜਾਣੀਅਹਿ ॥", "ਸਮੁੰਦ ਸਾਹ ਸੁਲਤਾਨ ਗਿਰਹਾ ਸੇਤੀ ਮਾਲੁ ਧਨੁ ॥", "ਕੀੜੀ ਤੁਲਿ ਨ ਹੋਵਨੀ ਜੇ ਤਿਸੁ ਮਨਹੁ ਨ ਵੀਸਰਹਿ ॥੨੩॥"] },
{ id: 24, stanza: "ਪਉੜੀ ੨੪", lines: ["ਅੰਤੁ ਨ ਸਿਫਤੀ ਕਹਣਿ ਨ ਅੰਤੁ ॥", "ਅੰਤੁ ਨ ਕਰਣੈ ਦੇਣਿ ਨ ਅੰਤੁ ॥", "ਅੰਤੁ ਨ ਵੇਖਣਿ ਸੁਣਣਿ ਨ ਅੰਤੁ ॥", "ਅੰਤੁ ਨ ਜਾਪੈ ਕਿਆ ਮਨਿ ਮੰਤੁ ॥", "ਅੰਤੁ ਨ ਜਾਪੈ ਕੀਤਾ ਆਕਾਰੁ ॥", "ਅੰਤੁ ਨ ਜਾਪੈ ਪਾਰਾਵਾਰੁ ॥", "ਅੰਤ ਕਾਰਣਿ ਕੇਤੇ ਬਿਲਲਾਹਿ ॥", "ਤਾ ਕੇ ਅੰਤ ਨ ਪਾਏ ਜਾਹਿ ॥", "ਏਹੁ ਅੰਤੁ ਨ ਜਾਣੈ ਕੋਇ ॥", "ਬਹੁਤਾ ਕਹੀਐ ਬਹੁਤਾ ਹੋਇ ॥", "ਵਡਾ ਸਾਹਿਬੁ ਊਚਾ ਥਾਉ ॥", "ਊਚੇ ਉਪਰਿ ਊਚਾ ਨਾਉ ॥", "ਏਵਡੁ ਊਚਾ ਹੋਵੈ ਕੋਇ ॥", "ਤਿਸੁ ਊਚੇ ਕਉ ਜਾਣੈ ਸੋਇ ॥", "ਜੇਵਡੁ ਆਪਿ ਜਾਣੈ ਆਪਿ ਆਪਿ ॥", "ਨਾਨਕ ਨਦਰੀ ਕਰਮੀ ਦਾਤਿ ॥੨੪॥"] },
{ id: 25, stanza: "ਪਉੜੀ ੨੫", lines: ["ਬਹੁਤਾ ਕਰਮੁ ਲਿਖਿਆ ਨਾ ਜਾਇ ॥", "ਵਡਾ ਦਾਤਾ ਤਿਲੁ ਨ ਤਮਾਇ ॥", "ਕੇਤੇ ਮੰਗਹਿ ਜੋਧ ਅਪਾਰ ॥", "ਕੇਤਿਆ ਗਣਤ ਨਹੀ ਵੀਚਾਰੁ ॥", "ਕੇਤੇ ਖਪਿ ਤੁਟਹਿ ਵੇਕਾਰ ॥", "ਕੇਤੇ ਲੈ ਲੈ ਮੁਕਰੁ ਪਾਹਿ ॥", "ਕੇਤੇ ਮੂਰਖ ਖਾਹੀ ਖਾਹਿ ॥", "ਕੇਤਿਆ ਦੂਖ ਭੂਖ ਸਦ ਮਾਰ ॥", "ਏਹਿ ਭਿ ਦਾਤਿ ਤੇਰੀ ਦਾਤਾਰ ॥", "ਬੰਦਿ ਖਲਾਸੀ ਭਾਣੈ ਹੋਇ ॥", "ਹੋਰੁ ਆਖਿ ਨ ਸਕੈ ਕੋਇ ॥", "ਜੇ ਕੋ ਖਾਇਕੁ ਆਖਣਿ ਪਾਇ ॥", "ਓਹੁ ਜਾਣੈ ਜੇਤੀਆ ਮੁਹਿ ਖਾਇ ॥", "ਆਪੇ ਜਾਣੈ ਆਪੇ ਦੇਇ ॥", "ਆਖਹਿ ਸਿ ਭਿ ਕੇਈ ਕੇਇ ॥", "ਜਿਸਨੋ ਬਖਸੇ ਸਿਫਤਿ ਸਾਲਾਹ ॥", "ਨਾਨਕ ਪਾਤਿਸਾਹੀ ਪਾਤਿਸਾਹੁ ॥੨੫॥"] },
{ id: 26, stanza: "ਪਉੜੀ ੨੬", lines: ["ਅਮੁਲ ਗੁਣ ਅਮੁਲ ਵਾਪਾਰ ॥", "ਅਮੁਲ ਵਾਪਾਰੀਏ ਅਮੁਲ ਭੰਡਾਰ ॥", "ਅਮੁਲ ਆਵਹਿ ਅਮੁਲ ਲੈ ਜਾਹਿ ॥", "ਅਮੁਲ ਭਾਇ ਅਮੁਲਾ ਸਮਾਹਿ ॥", "ਅਮੁਲੁ ਧਰਮੁ ਅਮੁਲੁ ਦੀਬਾਣੁ ॥", "ਅਮੁਲੁ ਤੁਲੁ ਅਮੁਲੁ ਪਰਵਾਣੁ ॥", "ਅਮੁਲੁ ਬਖਸੀਸ ਅਮੁਲੁ ਨੀਸਾਣੁ ॥", "ਅਮੁਲੁ ਕਰਮੁ ਅਮੁਲੁ ਫੁਰਮਾਣੁ ॥", "ਅਮੁਲੋ ਅਮੁਲੁ ਆਖਿਆ ਨ ਜਾਇ ॥", "ਆਖਿ ਆਖਿ ਰਹੇ ਲਿਵ ਲਾਇ ॥", "ਆਖਹਿ ਵੇਦ ਪਾਠ ਪੁਰਾਣ ॥", "ਆਖਹਿ ਪੜੇ ਕਰਹਿ ਵਖਿਆਣ ॥", "ਆਖਹਿ ਬਰਮੇ ਆਖਹਿ ਇੰਦ ॥", "ਆਖਹਿ ਗੋਪੀ ਤੈ ਗੋਵਿੰਦ ॥", "ਆਖਹਿ ਈਸਰ ਆਖਹਿ ਸਿਧ ॥", "ਆਖਹਿ ਕੇਤੇ ਕੀਤੇ ਬੁਧ ॥", "ਆਖਹਿ ਦਾਨਵ ਆਖਹਿ ਦੇਵ ॥", "ਆਖਹਿ ਸੁਰਿ ਨਰ ਮੁਨਿ ਜਨ ਸੇਵ ॥", "ਕੇਤੇ ਆਖਹਿ ਆਖਣਿ ਪਾਹਿ ॥", "ਕੇਤੇ ਕਹਿ ਕਹਿ ਉਠਿ ਉਠਿ ਜਾਹਿ ॥", "ਏਤੇ ਕੀਤੇ ਹੋਰਿ ਕਰੇਹਿ ॥", "ਤਾ ਆਖਿ ਨ ਸਕਹਿ ਕੇਈ ਕੇਇ ॥", "ਜੇਵਡੁ ਭਾਵੈ ਤੇਵਡੁ ਹੋਇ ॥", "ਨਾਨਕ ਜਾਣੈ ਸਾਚਾ ਸੋਇ ॥", "ਜੇ ਕੋ ਆਖੈ ਬੋਲੁ ਵਿਗਾੜੁ ॥", "ਤਾ ਲਿਖੀਐ ਸਿਰਿ ਗਾਵਾਰਾ ਗਾਵਾਰੁ ॥੨੬॥"] },
{ id: 27, stanza: "ਪਉੜੀ ੨੭", lines: ["ਸੋ ਦਰੁ ਕੇਹਾ ਸੋ ਘਰੁ ਕੇਹਾ ਜਿਤੁ ਬਹਿ ਸਰਬ ਸਮਾਲੇ ॥", "ਵਾਜੇ ਨਾਦ ਅਨੇਕ ਅਸੰਖਾ ਕੇਤੇ ਵਾਵਣਹਾਰੇ ॥", "ਕੇਤੇ ਰਾਗ ਪਰੀ ਸਿਉ ਕਹੀਅਨਿ ਕੇਤੇ ਗਾਵਣਹਾਰੇ ॥", "ਗਾਵਹਿ ਤੁਹਨੋ ਪਉਣੁ ਪਾਣੀ ਬੈਸੰਤਰੁ ਗਾਵੈ ਰਾਜਾਧਰਮੁ ਦੁਆਰੇ ॥", "ਗਾਵਹਿ ਚਿਤੁ ਗੁਪਤੁ ਲਿਖਿ ਜਾਣਹਿ ਲਿਖਿ ਲਿਖਿ ਧਰਮੁ ਵੀਚਾਰੇ ॥", "ਗਾਵਹਿ ਈਸਰੁ ਬਰਮਾ ਦੇਵੀ ਸੋਹਨਿ ਸਦਾ ਸਵਾਰੇ ॥", "ਗਾਵਹਿ ਇੰਦ ਇਦਾਸਣਿ ਬੈਠੇ ਦੇਵਤਿਆ ਦਰਿ ਨਾਲੇ ॥", "ਗਾਵਹਿ ਸਿਧ ਸਮਾਧੀ ਅੰਦਰਿ ਗਾਵਨਿ ਸਾਧ ਵਿਚਾਰੇ ॥", "ਗਾਵਨਿ ਜਤੀ ਸਤੀ ਸੰਤੋਖੀ ਗਾਵਹਿ ਵੀਰ ਕਰਾਰੇ ॥", "ਗਾਵਨਿ ਪੰਡਿਤ ਪੜਨਿ ਰਖੀਸਰ ਜੁਗੁ ਜੁਗੁ ਵੇਦਾ ਨਾਲੇ ॥", "ਗਾਵਹਿ ਮੋਹਣੀਆ ਮਨੁ ਮੋਹਨਿ ਸੁਰਗਾ ਮਛ ਪਇਆਲੇ ॥", "ਗਾਵਨਿ ਰਤਨ ਉਪਾਏ ਤੇਰੇ ਅਠਸਠਿ ਤੀਰਥ ਨਾਲੇ ॥", "ਗਾਵਹਿ ਜੋਧ ਮਹਾਬਲ ਸੂਰਾ ਗਾਵਹਿ ਖਾਣੀ ਚਾਰੇ ॥", "ਗਾਵਹਿ ਖੰਡ ਮੰਡਲ ਵਰਭੰਡਾ ਕਰਿ ਕਰਿ ਰਖੇ ਧਾਰੇ ॥", "ਸੇਈ ਤੁਧੁਨੋ ਗਾਵਹਿ ਜੋ ਤੁਧੁ ਭਾਵਨਿ ਰਤੇ ਤੇਰੇ ਭਗਤ ਰਸਾਲੇ ॥", "ਹੋਰਿ ਕੇਤੇ ਗਾਵਨਿ ਸੇ ਮੈ ਚਿਤਿ ਨ ਆਵਨਿ ਨਾਨਕੁ ਕਿਆ ਵੀਚਾਰੇ ॥", "ਸੋਈ ਸੋਈ ਸਦਾ ਸਚੁ ਸਾਹਿਬੁ ਸਾਚਾ ਸਾਚੀ ਨਾਈ ॥", "ਹੈ ਭੀ ਹੋਸੀ ਜਾਇ ਨ ਜਾਸੀ ਰਚਨਾ ਜਿਨਿ ਰਚਾਈ ॥", "ਰੰਗੀ ਰੰਗੀ ਭਾਤੀ ਕਰਿ ਕਰਿ ਜਿਨਸੀ ਮਾਇਆ ਜਿਨਿ ਉਪਾਈ ॥", "ਕਰਿ ਕਰਿ ਵੇਖੈ ਕੀਤਾ ਆਪਣਾ ਜਿਵ ਤਿਸਦੀ ਵਡਿਆਈ ॥", "ਜੋ ਤਿਸੁ ਭਾਵੈ ਸੋਈ ਕਰਸੀ ਹੁਕਮੁ ਨ ਕਰਣਾ ਜਾਈ ॥", "ਸੋ ਪਾਤਿਸਾਹੁ ਸਾਹਾ ਪਾਤਿਸਾਹਿਬੁ ਨਾਨਕ ਰਹਣੁ ਰਜਾਈ ॥੨੭॥"] },
{ id: 28, stanza: "ਪਉੜੀ ੨੮", lines: ["ਮੁੰਦਾ ਸੰਤੋਖੁ ਸਰਮੁ ਪਤੁ ਝੋਲੀ ਧਿਆਨ ਕੀ ਕਰਹਿ ਬਿਭੂਤਿ ॥", "ਖਿੰਥਾ ਕਾਲੁ ਕੁਆਰੀ ਕਾਇਆ ਜੁਗਤਿ ਡੰਡਾ ਪਰਤੀਤਿ ॥", "ਆਈ ਪੰਥੀ ਸਗਲ ਜਮਾਤੀ ਮਨਿ ਜੀਤੈ ਜਗੁ ਜੀਤੁ ॥", "ਆਦੇਸੁ ਤਿਸੈ ਆਦੇਸੁ ॥", "ਆਦਿ ਅਨੀਲੁ ਅਨਾਦਿ ਅਨਾਹਤਿ ਜੁਗੁ ਜੁਗੁ ਏਕੋ ਵੇਸੁ ॥੨੮॥"] },
{ id: 29, stanza: "ਪਉੜੀ ੨੯", lines: ["ਭੁਗਤਿ ਗਿਆਨੁ ਦਇਆ ਭੰਡਾਰਣਿ ਘਟਿ ਘਟਿ ਵਾਜਹਿ ਨਾਦ ॥", "ਆਪਿ ਨਾਥੁ ਨਾਥੀ ਸਭ ਜਾ ਕੀ ਰਿਧਿ ਸਿਧਿ ਅਵਰਾ ਸਾਦ ॥", "ਸੰਜੋਗੁ ਵਿਜੋਗੁ ਦੁਇ ਕਾਰ ਚਲਾਵਹਿ ਲੇਖੇ ਆਵਹਿ ਭਾਗ ॥", "ਆਦੇਸੁ ਤਿਸੈ ਆਦੇਸੁ ॥", "ਆਦਿ ਅਨੀਲੁ ਅਨਾਦਿ ਅਨਾਹਤਿ ਜੁਗੁ ਜੁਗੁ ਏਕੋ ਵੇਸੁ ॥੨੯॥"] },
{ id: 30, stanza: "ਪਉੜੀ ੩੦", lines: ["ਏਕਾ ਮਾਈ ਜੁਗਤਿ ਵਿਆਈ ਤਿਨਿ ਚੇਲੇ ਪਰਵਾਣੁ ॥", "ਇਕੁ ਸੰਸਾਰੀ ਇਕੁ ਭੰਡਾਰੀ ਇਕੁ ਲਾਏ ਦੀ ਬਾਣੁ ॥", "ਜਿਵ ਤਿਸੁ ਭਾਵੈ ਤਿਵੈ ਚਲਾਵੈ ਜਿਵ ਹੋਵੈ ਫੁਰਮਾਣੁ ॥", "ਓਹੁ ਵੇਖੈ ਓਨਾ ਨਦਰਿ ਨ ਆਵੈ ਬਹੁਤਾ ਏਹੁ ਵਿਡਾਣੁ ॥", "ਆਦੇਸੁ ਤਿਸੈ ਆਦੇਸੁ ॥", "ਆਦਿ ਅਨੀਲੁ ਅਨਾਦਿ ਅਨਾਹਤਿ ਜੁਗੁ ਜੁਗੁ ਏਕੋ ਵੇਸੁ ॥੩੦॥"] },
{ id: 31, stanza: "ਪਉੜੀ ੩੧", lines: ["ਆਸਣੁ ਲੋਇ ਲੋਇ ਭੰਡਾਰ ॥", "ਜੋ ਕਿਛੁ ਪਾਇਆ ਸੁ ਏਕਾ ਵਾਰ ॥", "ਕਰਿ ਕਰਿ ਵੇਖੈ ਸਿਰਜਣਹਾਰੁ ॥", "ਨਾਨਕ ਸਚੇ ਕੀ ਸਾਚੀ ਕਾਰ ॥", "ਆਦੇਸੁ ਤਿਸੈ ਆਦੇਸੁ ॥", "ਆਦਿ ਅਨੀਲੁ ਅਨਾਦਿ ਅਨਾਹਤਿ ਜੁਗੁ ਜੁਗੁ ਏਕੋ ਵੇਸੁ ॥੩੧॥"] },
{ id: 32, stanza: "ਪਉੜੀ ੩੨", lines: ["ਇਕਦੂ ਜੀਭੌ ਲਖ ਹੋਹਿ ਲਖ ਹੋਵਹਿ ਲਖ ਵੀਸ ॥", "ਲਖੁ ਲਖੁ ਗੇੜਾ ਆਖੀਅਹਿ ਏਕੁ ਨਾਮੁ ਜਗਦੀਸ ॥", "ਏਤੁ ਰਾਹਿ ਪਤਿ ਪਵੜੀਆ ਚੜੀਐ ਹੋਇ ਇਕੀਸ ॥", "ਸੁਣਿ ਗਲਾ ਆਕਾਸ ਕੀ ਕੀਟਾ ਆਈ ਰੀਸ ॥", "ਨਾਨਕ ਨਦਰੀ ਪਾਈਐ ਕੂੜੀ ਕੂੜੈ ਠੀਸ ॥੩੨॥"] },
{ id: 33, stanza: "ਪਉੜੀ ੩੩", lines: ["ਆਖਣਿ ਜੋਰੁ ਚੁਪੈ ਨਹ ਜੋਰੁ ॥", "ਜੋਰੁ ਨ ਮੰਗਣਿ ਦੇਣਿ ਨ ਜੋਰੁ ॥", "ਜੋਰੁ ਨ ਜੀਵਣਿ ਮਰਣਿ ਨਹ ਜੋਰੁ ॥", "ਜੋਰੁ ਨ ਰਾਜਿ ਮਾਲਿ ਮਨਿ ਸੋਰੁ ॥", "ਜੋਰੁ ਨ ਸੁਰਤੀ ਗਿਆਨਿ ਵੀਚਾਰਿ ॥", "ਜੋਰੁ ਨ ਜੁਗਤੀ ਛੁਟੈ ਸੰਸਾਰੁ ॥", "ਜਿਸੁ ਹਥਿ ਜੋਰੁ ਕਰਿ ਵੇਖੈ ਸੋਇ ॥", "ਨਾਨਕ ਉਤਮੁ ਨੀਚੁ ਨ ਕੋਇ ॥੩੩॥"] },
{ id: 34, stanza: "ਪਉੜੀ ੩੪", lines: ["ਰਾਤੀ ਰੁਤੀ ਥਿਤੀ ਵਾਰ ॥", "ਪਵਣ ਪਾਣੀ ਅਗਨੀ ਪਾਤਾਲ ॥", "ਤਿਸੁ  ਵਿਚਿ ਧਰਤੀ ਥਾਪਿ ਰਖੀ ਧਰਮਸਾਲ ॥", "ਤਿਸੁ ਵਿਚਿ ਜੀਅ ਜੁਗਤਿ ਕੇ ਰੰਗ ॥", "ਤਿਨ ਕੇ ਨਾਮ ਅਨੇਕ ਅਨੰਤ ॥", "ਕਰਮੀ ਕਰਮੀ ਹੋਇ ਵੀਚਾਰੁ ॥", "ਸਚਾ ਆਪਿ ਸਚਾ ਦਰਬਾਰੁ ॥", "ਤਿਥੈ ਸੋਹਨਿ ਪੰਚ ਪਰਵਾਣੁ ॥", "ਨਦਰੀ ਕਰਮਿ ਪਵੈ ਨੀਸਾਣੁ ॥", "ਕਚ ਪਕਾਈ ਓਥੈ ਪਾਇ ॥", "ਨਾਨਕ ਗਇਆ ਜਾਪੈ ਜਾਇ ॥੩੪॥"] },
{ id: 35, stanza: "ਪਉੜੀ ੩੫", lines: ["ਧਰਮ ਖੰਡ ਕਾ ਏਹੋ ਧਰਮੁ ॥", "ਗਿਆਨ ਖੰਡ ਕਾ ਆਖਹੁ ਕਰਮੁ ॥", "ਕੇਤੇ ਪਵਣ ਪਾਣੀ ਵੈਸੰਤਰ ਕੇਤੇ ਕਾਨ ਮਹੇਸ ॥", "ਕੇਤੇ ਬਰਮੇ ਘਾੜਤਿ ਘੜੀਅਹਿ ਰੂਪ ਰੰਗ ਕੇ ਵੇਸ ॥", "ਕੇਤੀਆ ਕਰਮਭੂਮੀ ਮੇਰ ਕੇਤੇ ਕੇਤੇ ਧੂ ਉਪਦੇਸ ॥", "ਕੇਤੇ ਇੰਦ ਚੰਦ ਸੂਰ ਕੇਤੇ ਕੇਤੇ ਮੰਡਲ ਦੇਸ ॥", "ਕੇਤੇ ਸਿਧ ਬੁਧ ਨਾਥ ਕੇਤੇ ਕੇਤੇ ਦੇਵੀ ਵੇਸ ॥", "ਕੇਤੇ ਦੇਵ ਦਾਨਵ ਮੁਨਿ ਕੇਤੇ ਕੇਤੇ ਰਤਨ ਸਮੁੰਦ ॥", "ਕੇਤੀਆ ਖਾਣੀ ਕੇਤੀਆ ਬਾਣੀ ਕੇਤੇ ਪਾਤ ਨਰਿੰਦ ॥", "ਕੇਤੀਆ ਸੁਰਤੀ ਸੇਵਕ ਕੇਤੇ ਨਾਨਕ ਅੰਤੁ ਨ ਅੰਤੁ ॥੩੫॥"] },
{ id: 36, stanza: "ਪਉੜੀ ੩੬", lines: ["ਗਿਆਨ ਖੰਡ ਮਹਿ ਗਿਆਨੁ ਪਰਚੰਡੁ ॥", "ਤਿਥੈ ਨਾਦ ਬਿਨੋਦ ਕੋਡ ਅਨੰਦੁ ॥", "ਸਰਮ ਖੰਡ ਕੀ ਬਾਣੀ ਰੂਪੁ ॥", "ਤਿਥੈ ਘਾੜਤਿ ਘੜੀਐ ਬਹੁਤੁ ਅਨੂਪੁ ॥", "ਤਾ ਕੀਆ ਗਲਾ ਕਥੀਆ ਨਾ ਜਾਹਿ ॥", "ਜੇ ਕੋ ਕਹੈ ਪਿਛੈ ਪਛੁਤਾਇ ॥", "ਤਿਥੈ ਘੜੀਐ ਸੁਰਤਿ ਮਤਿ ਮਨਿ ਬੁਧਿ ॥", "ਤਿਥੈ ਘੜੀਐ ਸੁਰਾ ਸਿਧਾ ਕੀ ਸੁਧਿ ॥੩੬॥"] },
{ id: 37, stanza: "ਪਉੜੀ ੩੭", lines: ["ਕਰਮ ਖੰਡ ਕੀ ਬਾਣੀ ਜੋਰੁ ॥", "ਤਿਥੈ ਹੋਰੁ ਨ ਕੋਈ ਹੋਰੁ ॥", "ਤਿਥੈ ਜੋਧ ਮਹਾਬਲ ਸੂਰ ॥", "ਤਿਨ ਮਹਿ ਰਾਮੁ ਰਹਿਆ ਭਰਪੂਰ ॥", "ਤਿਥੈ ਸੀਤੋ ਸੀਤਾ ਮਹਿਮਾ ਮਾਹਿ ॥", "ਤਾ ਕੇ ਰੂਪ ਨ ਕਥਨੇ ਜਾਹਿ ॥", "ਨਾ ਓਹਿ ਮਰਹਿ ਨ ਠਾਗੇ ਜਾਹਿ ॥", "ਜਿਨ ਕੈ ਰਾਮੁ ਵਸੈ ਮਨ ਮਾਹਿ ॥", "ਤਿਥੈ ਭਗਤ ਵਸਹਿ ਕੇ ਲੋਅ ॥", "ਕਰਹਿ ਅਨੰਦੁ ਸਚਾ ਮਨਿ ਸੋਇ ॥", "ਸਚਖੰਡਿ ਵਸੈ ਨਿਰੰਕਾਰੁ ॥", "ਕਰਿ ਕਰਿ ਵੇਖੈ ਨਦਰਿ ਨਿਹਾਲ ॥", "ਤਿਥੈ ਖੰਡ ਮੰਡਲ ਵਰਭੰਡ ॥", "ਜੇ ਕੋ ਕਥੈ ਤ ਅੰਤ ਨ ਅੰਤ ॥", "ਤਿਥੈ ਲੋਅ ਲੋਅ ਆਕਾਰ ॥", "ਜਿਵ ਜਿਵ ਹੁਕਮੁ ਤਿਵੈ ਤਿਵ ਕਾਰ ॥", "ਵੇਖੈ ਵਿਗਸੈ ਕਰਿ ਵੀਚਾਰੁ ॥", "ਨਾਨਕ ਕਥਨਾ ਕਰੜਾ ਸਾਰੁ ॥੩੭॥"] },
{ id: 38, stanza: "ਪਉੜੀ ੩੮", lines: ["ਜਤੁ ਪਾਹਾਰਾ ਧੀਰਜੁ ਸੁਨਿਆਰੁ ॥", "ਅਹਰਣਿ ਮਤਿ ਵੇਦੁ ਹਥੀਆਰੁ ॥", "ਭਉ ਖਲਾ ਅਗਨਿ ਤਪ ਤਾਉ ॥", "ਭਾਂਡਾ ਭਾਉ ਅੰਮ੍ਰਿਤੁ ਤਿਤੁ ਢਾਲਿ ॥", "ਘੜੀਐ ਸਬਦੁ ਸਚੀ ਟਕਸਾਲ ॥", "ਜਿਨ ਕਉ ਨਦਰਿ ਕਰਮੁ ਤਿਨ ਕਾਰ ॥", "ਨਾਨਕ ਨਦਰੀ ਨਦਰਿ ਨਿਹਾਲ ॥੩੮॥"] },
{ id: 39, stanza: "ਸਲੋਕ", lines: ["ਪਵਣੁ ਗੁਰੂ ਪਾਣੀ ਪਿਤਾ ਮਾਤਾ ਧਰਤਿ ਮਹਤੁ ॥", "ਦਿਵਸੁ ਰਾਤਿ ਦੁਇ ਦਾਈ ਦਾਇਆ ਖੇਲੈ ਸਗਲ ਜਗਤੁ ॥", "ਚੰਗਿਆਈਆ ਬੁਰਿਆਈਆ ਵਾਚੈ ਧਰਮੁ ਹਦੂਰਿ ॥", "ਕਰਮੀ ਆਪੋ ਆਪਣੀ ਕੇ ਨੇੜੈ ਕੇ ਦੂਰਿ ॥", "ਜਿਨੀ ਨਾਮੁ ਧਿਆਇਆ ਗਏ ਮਸਕਤਿ ਘਾਲਿ ॥", "ਨਾਨਕ ਤੇ ਮੁਖ ਉਜਲੇ ਕੇਤੀ ਛੁਟੀ ਨਾਲਿ ॥੧॥"] }
];

const App = () => {
const [currentScreen, setCurrentScreen] = useState('home');
const [currentActivity, setCurrentActivity] = useState(null);
const [selectedStanza, setSelectedStanza] = useState('all');

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [questions, setQuestions] = useState([]);
const [selectedAnswer, setSelectedAnswer] = useState(null);
const [showResult, setShowResult] = useState(false);

const [currentStanzaIndex, setCurrentStanzaIndex] = useState(0);
const [memorizedLines, setMemorizedLines] = useState({});
const [orderLinesStanzas, setOrderLinesStanzas] = useState([]);
const [orderLinesIndex, setOrderLinesIndex] = useState(0);
const [shuffledLines, setShuffledLines] = useState([]);
const [selectedLines, setSelectedLines] = useState([]);
const [orderResult, setOrderResult] = useState(null); // null | 'correct' | 'wrong'

const noStrikethroughStyle = {
textDecoration: 'none !important',
textDecorationLine: 'none',
textDecorationStyle: 'none',
textDecorationColor: 'transparent'
};

const generateNextWordQuestions = (stanzaFilter) => {
let sourceStanzas;
if (stanzaFilter === 'all') {
sourceStanzas = gurbaniText;
} else if (Array.isArray(stanzaFilter)) {
sourceStanzas = gurbaniText.filter(s => stanzaFilter.includes(s.id.toString()));
} else {
sourceStanzas = gurbaniText.filter(s => s.id === parseInt(stanzaFilter));
}

const isPunctuation = (word) => {
  // Check if word is only punctuation marks (॥, ।, etc.)
  return /^[॥।॥੧੨੩੪੫੬੭੮੯੦]+$/.test(word.trim());
};

const allLines = [];
sourceStanzas.forEach(stanza => {
  stanza.lines.forEach((line, lineIndex) => {
    const words = line.trim().split(' ').filter(w => w.length > 0 && !isPunctuation(w));
    // Need at least 4 words: 3 for context + 1 for answer
    if (words.length >= 4) {
      allLines.push({ stanza: stanza.stanza, line, lineIndex, words });
    }
  });
});

const shuffled = [...allLines].sort(() => Math.random() - 0.5);
return shuffled.slice(0, Math.min(10, shuffled.length)).map(item => {
  // Don't pick the last word if it's punctuation
  let maxIndex = item.words.length - 1;
  while (maxIndex > 0 && isPunctuation(item.words[maxIndex])) {
    maxIndex--;
  }
  
  // Ensure at least 3 words before the answer (randomIndex + 1 is the answer)
  // So randomIndex must be at least 2 (words[0], words[1], words[2] shown, words[3] is answer)
  const minIndex = 2;
  const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex)) + minIndex;
  const displayWords = item.words.slice(0, randomIndex + 1);
  const correctAnswer = item.words[randomIndex + 1];
  
  const wrongAnswers = [];
  while (wrongAnswers.length < 3) {
    const randomLine = allLines[Math.floor(Math.random() * allLines.length)];
    const randomWord = randomLine.words[Math.floor(Math.random() * randomLine.words.length)];
    if (randomWord !== correctAnswer && !wrongAnswers.includes(randomWord) && !isPunctuation(randomWord)) {
      wrongAnswers.push(randomWord);
    }
  }
  
  const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
  
  return {
    prompt: displayWords.join(' '),
    correctAnswer,
    options,
    stanza: item.stanza
  };
});

};

const generateFillBlanksQuestions = (stanzaFilter) => {
let sourceStanzas;
if (stanzaFilter === 'all') {
sourceStanzas = gurbaniText;
} else if (Array.isArray(stanzaFilter)) {
sourceStanzas = gurbaniText.filter(s => stanzaFilter.includes(s.id.toString()));
} else {
sourceStanzas = gurbaniText.filter(s => s.id === parseInt(stanzaFilter));
}

const allLines = [];
sourceStanzas.forEach(stanza => {
  stanza.lines.forEach((line, lineIndex) => {
    const words = line.trim().split(' ').filter(w => w.length > 0);
    if (words.length > 2) {
      allLines.push({ stanza: stanza.stanza, line, words });
    }
  });
});

const shuffled = [...allLines].sort(() => Math.random() - 0.5);
return shuffled.slice(0, Math.min(10, shuffled.length)).map(item => {
  const blankIndex = Math.floor(Math.random() * item.words.length);
  const correctAnswer = item.words[blankIndex];
  
  const beforeBlank = item.words.slice(0, blankIndex);
  const afterBlank = item.words.slice(blankIndex + 1);
  
  const wrongAnswers = [];
  while (wrongAnswers.length < 3) {
    const randomLine = allLines[Math.floor(Math.random() * allLines.length)];
    const randomWord = randomLine.words[Math.floor(Math.random() * randomLine.words.length)];
    if (randomWord !== correctAnswer && !wrongAnswers.includes(randomWord)) {
      wrongAnswers.push(randomWord);
    }
  }
  
  const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
  
  return {
    beforeBlank,
    afterBlank,
    blankIndex,
    correctAnswer,
    options,
    stanza: item.stanza
  };
});

};

const startActivity = (activityType, stanza = 'all') => {
setCurrentActivity(activityType);
setSelectedStanza(stanza);
setCurrentQuestion(0);
setScore(0);
setSelectedAnswer(null);
setShowResult(false);

if (activityType === 'nextWord') {
  const generatedQuestions = generateNextWordQuestions(stanza);
  setQuestions(generatedQuestions);
  setCurrentScreen('nextWord');
} else if (activityType === 'readPractice') {
  setCurrentStanzaIndex(stanza === 'all' ? 0 : parseInt(stanza));
  setCurrentScreen('readPractice');
}

};

const handleAnswer = (answer) => {
setSelectedAnswer(answer);
if (answer === questions[currentQuestion].correctAnswer) {
setScore(score + 1);
}
setShowResult(true);
};

const nextQuestion = () => {
if (currentQuestion < questions.length - 1) {
setCurrentQuestion(currentQuestion + 1);
setSelectedAnswer(null);
setShowResult(false);
} else {
setCurrentScreen('results');
}
};

const toggleLineMemorized = (stanzaId, lineIndex) => {
const key = `${stanzaId}-${lineIndex}`;
setMemorizedLines(prev => ({
...prev,
[key]: !prev[key]
}));
};

const ActivityCard = ({ icon, title, description, onClick, color }) => (
<button
onClick={onClick}
className={`${color} text-white rounded-lg shadow-lg p-5 sm:p-8 hover:shadow-xl transition-all transform hover:scale-[1.02]`}
>
<div className="flex flex-col items-center text-center">
{icon}
<h3 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-2">{title}</h3>
<p className="text-sm sm:text-base text-white/90">{description}</p>
</div>
</button>
);

const Home = () => (
<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6">
<style>{`.gurbani-text, .gurbani-text * { text-decoration: none !important; }`}</style>

  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-8 sm:mb-12">
      <h1 className="text-3xl sm:text-5xl font-bold text-amber-900 mb-3 sm:mb-4">ਜਪੁਜੀ ਸਾਹਿਬ</h1>
      <p className="text-base sm:text-xl text-amber-800">Memorization Practice App</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <ActivityCard
        icon={<HelpCircle className="w-12 h-12" />}
        title="What's the Next Word?"
        description="Test your memory by completing lines"
        onClick={() => setCurrentScreen('selectStanzaNextWord')}
        color="bg-blue-600"
      />

      <ActivityCard
        icon={<BookOpen className="w-12 h-12" />}
        title="Read & Practice"
        description="Read and mark memorized lines"
        onClick={() => startActivity('readPractice', 'all')}
        color="bg-yellow-500"
      />

      <ActivityCard
        icon={<List className="w-12 h-12" />}
        title="Order the Lines"
        description="Arrange lines in correct sequence"
        onClick={() => setCurrentScreen('selectStanzaOrderLines')}
        color="bg-orange-500"
      />
    </div>
  </div>
</div>

);

const StanzaSelector = ({ activityType, activityTitle, onStart }) => {
const [checkedStanzas, setCheckedStanzas] = React.useState([]);
const [allChecked, setAllChecked] = React.useState(true);

const toggleAll = () => {
  setAllChecked(true);
  setCheckedStanzas([]);
};

const toggleStanza = (stanzaId) => {
  setAllChecked(false);
  setCheckedStanzas(prev => {
    if (prev.includes(stanzaId)) {
      const next = prev.filter(id => id !== stanzaId);
      if (next.length === 0) {
        setAllChecked(true);
        return [];
      }
      return next;
    } else {
      return [...prev, stanzaId];
    }
  });
};

const handleStartPractice = () => {
  const filter = allChecked ? 'all' : checkedStanzas;
  if (onStart) {
    onStart(filter);
  } else {
    startActivity(activityType, filter);
  }
};

const selectionLabel = allChecked
  ? 'All Pauris'
  : checkedStanzas.length === 1
  ? '1 Pauri Selected'
  : checkedStanzas.length + ' Pauris Selected';

return (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6">
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => setCurrentScreen('home')}
        className="mb-6 flex items-center text-amber-800 hover:text-amber-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 text-center">
        {activityTitle}
      </h2>
      <p className="text-center text-amber-700 mb-6">
        Select one or more Pauris to practice:
      </p>

      <div className="mb-6 flex justify-center">
        <button
          onClick={handleStartPractice}
          className="px-5 sm:px-8 py-3 bg-amber-600 text-white text-base sm:text-xl font-bold rounded-lg hover:bg-amber-700 transition-colors"
        >
          Start Practice — {selectionLabel}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label
          className={`flex items-center gap-4 p-4 rounded-lg shadow cursor-pointer border-2 transition-all ${
            allChecked ? 'bg-amber-100 border-amber-500' : 'bg-white border-gray-200 hover:border-amber-300'
          }`}
        >
          <input
            type="checkbox"
            checked={allChecked}
            onChange={toggleAll}
            className="w-5 h-5 accent-amber-600"
          />
          <div className="flex-1 text-right">
            <div className="text-xl font-bold text-amber-900">ਸਾਰੀਆਂ ਪਉੜੀਆਂ</div>
            <div className="text-sm text-amber-700">All Pauris — Complete Japji Sahib</div>
          </div>
        </label>

        {gurbaniText.map((stanza) => {
          const sid = stanza.id.toString();
          const isChecked = checkedStanzas.includes(sid);
          return (
            <label
              key={stanza.id}
              className={`flex items-center gap-4 p-4 rounded-lg shadow cursor-pointer border-2 transition-all ${
                isChecked ? 'bg-amber-100 border-amber-500' : 'bg-white border-gray-200 hover:border-amber-300'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleStanza(sid)}
                className="w-5 h-5 accent-amber-600"
              />
              <div className="flex-1 text-right">
                <div className="text-xl font-bold text-amber-900">{stanza.stanza}</div>
                <div className="text-sm text-amber-700">{stanza.lines.length} lines</div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  </div>
);

};

const NextWordActivity = () => {
if (questions.length === 0) {
return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6">
<div className="max-w-3xl mx-auto">
<button
onClick={() => setCurrentScreen('home')}
className="mb-6 flex items-center text-blue-800 hover:text-blue-900"
>
<ArrowLeft className="w-5 h-5 mr-2" />
Back to Home
</button>
<div className="bg-white rounded-lg shadow-xl p-8 text-center">
<h2 className="text-2xl font-bold text-blue-900 mb-4">No Questions Available</h2>
<p className="text-blue-700 mb-6">Unable to generate questions from the selected Pauris.</p>
<button
onClick={() => setCurrentScreen('home')}
className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
>
Return to Home
</button>
</div>
</div>
</div>
);
}

const q = questions[currentQuestion];

return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => setCurrentScreen('home')}
        className="mb-6 flex items-center text-blue-800 hover:text-blue-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
        <div className="flex flex-col mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">What's the Next Word?</h2>
          <div className="text-blue-600 text-sm">
            Question {currentQuestion + 1} of {questions.length} &nbsp;•&nbsp; Score: {score}
          </div>
        </div>

        <div className="mb-2 text-blue-500 text-sm font-semibold">{q.stanza}</div>

        <div className="mb-4 text-center">
          <div className="text-3xl md:text-4xl text-blue-900 mb-2 font-semibold" dir="rtl" style={{...noStrikethroughStyle, lineHeight: '1.8'}}>
            {q.prompt}
          </div>
          <ArrowDown className="w-8 h-8 mx-auto text-blue-500 my-2" />
          <div className="text-5xl md:text-6xl text-blue-300">?</div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={`p-3 md:p-4 text-2xl md:text-3xl rounded-lg border-2 transition-all ${
                showResult
                  ? option === q.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : option === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-100 border-gray-300'
                  : selectedAnswer === option
                  ? 'bg-blue-100 border-blue-500'
                  : 'bg-white border-gray-300 hover:border-blue-400'
              }`}
              dir="rtl"
              style={noStrikethroughStyle}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-6">
            <div className={`p-4 rounded-lg ${selectedAnswer === q.correctAnswer ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="text-center font-semibold">
                {selectedAnswer === q.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
              </p>
            </div>
            <button
              onClick={nextQuestion}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

};

const FillBlanksActivity = () => {
if (questions.length === 0) return null;
const q = questions[currentQuestion];

return (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6">
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => setCurrentScreen('home')}
        className="mb-6 flex items-center text-purple-800 hover:text-purple-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-900">Fill in the Blanks</h2>
          <div className="text-purple-700">
            Question {currentQuestion + 1} of {questions.length} • Score: {score}
          </div>
        </div>

        <div className="mb-2 text-purple-600 text-sm">{q.stanza}</div>

        <div className="mb-6 p-6 bg-purple-50 rounded-lg">
          <div className="text-3xl text-purple-900 font-semibold gurbani-text" dir="rtl" style={{...noStrikethroughStyle, lineHeight: '1.8'}}>
            <span style={noStrikethroughStyle}>{q.beforeBlank.join(' ')}</span>
            <span className="inline-block mx-2 px-6 py-1 bg-purple-200 border-2 border-purple-400 rounded" style={noStrikethroughStyle}>
              ____
            </span>
            <span style={noStrikethroughStyle}>{q.afterBlank.join(' ')}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => !showResult && handleAnswer(option)}
              disabled={showResult}
              className={`p-4 text-3xl rounded-lg border-2 transition-all gurbani-text ${
                showResult
                  ? option === q.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : option === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-100 border-gray-300'
                  : selectedAnswer === option
                  ? 'bg-purple-100 border-purple-500'
                  : 'bg-white border-gray-300 hover:border-purple-400'
              }`}
              dir="rtl"
              style={noStrikethroughStyle}
            >
              {option}
            </button>
          ))}
        </div>

        {showResult && (
          <div className="mt-6">
            <div className={`p-4 rounded-lg ${selectedAnswer === q.correctAnswer ? 'bg-green-100' : 'bg-red-100'}`}>
              <p className="text-center font-semibold">
                {selectedAnswer === q.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
              </p>
            </div>
            <button
              onClick={nextQuestion}
              className="mt-4 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

};

const ReadPractice = () => {
const stanza = gurbaniText[currentStanzaIndex];

return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6">
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => setCurrentScreen('home')}
        className="mb-6 flex items-center text-green-800 hover:text-green-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">
          Read & Practice
        </h2>

        <div className="mb-6">
          <label className="block text-green-800 font-semibold mb-2">
            Jump to Pauri:
          </label>
          <select
            value={currentStanzaIndex}
            onChange={(e) => setCurrentStanzaIndex(parseInt(e.target.value))}
            className="w-full p-3 border-2 border-green-300 rounded-lg focus:border-green-500 focus:outline-none text-lg"
          >
            {gurbaniText.map((s, idx) => (
              <option key={s.id} value={idx}>
                {s.stanza} ({s.lines.length} lines)
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 p-4 bg-green-50 rounded-lg">
          <h3 className="text-2xl font-bold text-green-900 text-right mb-4">
            {stanza.stanza}
          </h3>
          <div className="space-y-4">
            {stanza.lines.map((line, lineIndex) => {
              const key = `${stanza.id}-${lineIndex}`;
              const isMemorized = memorizedLines[key] || false;

              return (
                <div
                  key={lineIndex}
                  className={`flex items-start gap-4 p-3 rounded-lg transition-all gurbani-text ${
                    isMemorized ? 'bg-green-100 border-2 border-green-400' : 'bg-white'
                  }`}
                  style={noStrikethroughStyle}
                >
                  <input
                    type="checkbox"
                    checked={isMemorized}
                    onChange={() => toggleLineMemorized(stanza.id, lineIndex)}
                    className="mt-2 w-5 h-5 cursor-pointer"
                  />
                  <div
                    className="flex-1 text-2xl text-green-900 leading-relaxed gurbani-text"
                    dir="rtl"
                    style={noStrikethroughStyle}
                  >
                    {line}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCurrentStanzaIndex(Math.max(0, currentStanzaIndex - 1))}
            disabled={currentStanzaIndex === 0}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              currentStanzaIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={() => setCurrentStanzaIndex(Math.min(gurbaniText.length - 1, currentStanzaIndex + 1))}
            disabled={currentStanzaIndex === gurbaniText.length - 1}
            className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
              currentStanzaIndex === gurbaniText.length - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

const Results = () => (
<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6">
<div className="max-w-2xl mx-auto">
<div className="bg-white rounded-lg shadow-xl p-8 text-center">
<h2 className="text-4xl font-bold text-amber-900 mb-6">Great Job!</h2>
<div className="text-6xl font-bold text-amber-700 mb-4">
{score} / {questions.length}
</div>
<p className="text-xl text-amber-800 mb-8">
You scored {Math.round((score / questions.length) * 100)}%
</p>
<div className="flex flex-col gap-4">
<button
onClick={() => startActivity(currentActivity, selectedStanza)}
className="bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors"
>
Practice Again
</button>
<button
onClick={() => setCurrentScreen('home')}
className="bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors"
>
Back to Home
</button>
</div>
</div>
</div>
</div>
);

const startOrderLines = (stanzaFilter) => {
let source;
if (stanzaFilter === 'all') {
source = gurbaniText;
} else if (Array.isArray(stanzaFilter)) {
source = gurbaniText.filter(s => stanzaFilter.includes(s.id.toString()));
} else {
source = gurbaniText.filter(s => s.id === parseInt(stanzaFilter));
}
// only use stanzas with 2+ lines
const valid = source.filter(s => s.lines.length >= 2);
if (valid.length === 0) return;
const shuffledStanzas = [...valid].sort(() => Math.random() - 0.5);
setOrderLinesStanzas(shuffledStanzas);
setOrderLinesIndex(0);
const first = shuffledStanzas[0];
setShuffledLines([...first.lines].sort(() => Math.random() - 0.5));
setSelectedLines([]);
setOrderResult(null);
setCurrentScreen('orderLines');
};

const OrderLinesActivity = () => {
if (orderLinesStanzas.length === 0) return null;
const stanza = orderLinesStanzas[orderLinesIndex];
const remaining = shuffledLines.filter(l => !selectedLines.includes(l));
const isComplete = selectedLines.length === stanza.lines.length;

const handleSelectLine = (line) => {
  if (orderResult !== null) return;
  const next = [...selectedLines, line];
  setSelectedLines(next);
  if (next.length === stanza.lines.length) {
    const correct = next.every((l, i) => l === stanza.lines[i]);
    setOrderResult(correct ? 'correct' : 'wrong');
  }
};

const handleRemoveLine = (index) => {
  if (orderResult !== null) return;
  setSelectedLines(prev => prev.slice(0, index));
};

const handleNext = () => {
  const nextIndex = orderLinesIndex + 1;
  if (nextIndex >= orderLinesStanzas.length) {
    setCurrentScreen('home');
    return;
  }
  const next = orderLinesStanzas[nextIndex];
  setOrderLinesIndex(nextIndex);
  setShuffledLines([...next.lines].sort(() => Math.random() - 0.5));
  setSelectedLines([]);
  setOrderResult(null);
};

const handleRetry = () => {
  setShuffledLines([...stanza.lines].sort(() => Math.random() - 0.5));
  setSelectedLines([]);
  setOrderResult(null);
};

return (
  <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-4 sm:p-6">
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => setCurrentScreen('home')}
        className="mb-6 flex items-center text-red-800 hover:text-red-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <div className="bg-white rounded-xl shadow-xl p-6 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-red-900">Order the Lines</h2>
          <span className="text-red-700 text-sm">{orderLinesIndex + 1} / {orderLinesStanzas.length}</span>
        </div>
        <div className="text-red-600 text-sm mb-4 text-right font-semibold">{stanza.stanza}</div>

        {/* Answer slots — lines placed so far */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Your order:</p>
          <div className="space-y-2">
            {stanza.lines.map((_, i) => {
              const placed = selectedLines[i];
              const isCorrect = placed && placed === stanza.lines[i];
              const isWrong = placed && placed !== stanza.lines[i];
              return placed ? (
                <button
                  key={i}
                  onClick={() => handleRemoveLine(i)}
                  className={`w-full min-h-12 rounded-lg border-2 px-4 py-3 text-right text-xl transition-all ${
                    orderResult === null
                      ? 'border-red-300 bg-red-50 hover:bg-red-100 hover:border-red-500'
                      : isCorrect
                      ? 'border-green-500 bg-green-50'
                      : isWrong
                      ? 'border-red-500 bg-red-100'
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  dir="rtl"
                  style={{lineHeight: '1.8'}}
                  title={orderResult === null ? 'Tap to remove' : ''}
                >
                  {placed}
                </button>
              ) : (
                <div
                  key={i}
                  className="min-h-12 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-right text-xl"
                  dir="rtl"
                  style={{lineHeight: '1.8'}}
                >
                  <span className="text-gray-300 text-base">— Pangti {i + 1} —</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Result banner */}
        {orderResult !== null && (
          <div className={`rounded-lg px-4 py-3 mb-4 text-center font-bold text-lg ${
            orderResult === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {orderResult === 'correct' ? '✅ Correct! Well done!' : '❌ Not quite — see the correct order below'}
          </div>
        )}

        {/* Remaining shuffled lines to tap */}
        {!isComplete && orderResult === null && (
          <div>
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Tap the next Pangti:</p>
            <div className="space-y-2">
              {remaining.map((line, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectLine(line)}
                  className="w-full text-right px-4 py-3 rounded-lg border-2 border-red-200 bg-white hover:bg-red-50 hover:border-red-400 transition-all text-xl text-red-900"
                  dir="rtl"
                  style={{lineHeight: '1.8'}}
                >
                  {line}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Correct order shown on wrong answer */}
        {orderResult === 'wrong' && (
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Correct order:</p>
            <div className="space-y-2">
              {stanza.lines.map((line, i) => (
                <div key={i} className="px-4 py-3 rounded-lg bg-green-50 border border-green-300 text-right text-xl text-green-900" dir="rtl" style={{lineHeight:'1.8'}}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action buttons after completion */}
        {orderResult !== null && (
          <div className="flex gap-3 mt-6 justify-center">
            {orderResult === 'wrong' && (
              <button
                onClick={handleRetry}
                className="px-6 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Try Again
              </button>
            )}
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              {orderLinesIndex + 1 >= orderLinesStanzas.length ? 'Finish' : 'Next Pauri →'}
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

};

if (currentScreen === 'home') return <Home />;
if (currentScreen === 'selectStanzaNextWord') return <StanzaSelector activityType="nextWord" activityTitle="What's the Next Word?" />;
if (currentScreen === 'selectStanzaOrderLines') return <StanzaSelector activityType="orderLines" activityTitle="Order the Lines" onStart={startOrderLines} />;
if (currentScreen === 'nextWord') return <NextWordActivity />;
if (currentScreen === 'orderLines') return <OrderLinesActivity />;
if (currentScreen === 'readPractice') return <ReadPractice />;
if (currentScreen === 'results') return <Results />;

return <Home />;
};

export default App;