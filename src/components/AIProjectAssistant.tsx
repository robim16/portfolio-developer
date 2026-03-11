"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2, RefreshCw, Copy, Check } from 'lucide-react';
import { generateProjectDescription, type GenerateProjectDescriptionOutput } from '@/ai/flows/generate-project-description-flow';
import { TechIcon } from '@/components/TechIcon';
import { useToast } from '@/hooks/use-toast';

export function AIProjectAssistant() {
  const [summary, setSummary] = useState('');
  const [repoMetadata, setRepoMetadata] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateProjectDescriptionOutput | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!summary && !repoMetadata) {
      toast({
        variant: "destructive",
        title: "Input required",
        description: "Please provide either a project summary or repo metadata."
      });
      return;
    }

    setLoading(true);
    try {
      const output = await generateProjectDescription({
        projectSummary: summary,
        githubRepoMetadata: repoMetadata
      });
      setResult(output);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate description. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.description);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Description copied to clipboard."
      });
    }
  };

  return (
    <Card className="border-2 border-primary/20 bg-background/50 backdrop-blur-sm shadow-xl overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <Sparkles className="w-6 h-6 text-primary fill-primary/20" />
          AI Project Assistant
        </CardTitle>
        <CardDescription>
          Generate professional descriptions and identify tech stacks for your new projects.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="summary">Brief Summary</Label>
          <Textarea 
            id="summary"
            placeholder="e.g. A real-time chat application using WebSockets and a clean UI..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="min-h-[100px] resize-none focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="metadata">Repository Metadata (Optional)</Label>
          <Input 
            id="metadata"
            placeholder="e.g. repo-name: chat-app, stars: 12, lang: TypeScript"
            value={repoMetadata}
            onChange={(e) => setRepoMetadata(e.target.value)}
            className="focus:ring-primary"
          />
        </div>

        {result && (
          <div className="mt-8 space-y-4 p-4 rounded-lg bg-secondary/50 border border-border animate-in fade-in slide-in-from-bottom-2">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">Generated Description</h4>
              <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{result.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground">Identified Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {result.technologies.map((tech) => (
                  <TechIcon key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleGenerate} 
          disabled={loading} 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 shadow-lg hover:shadow-primary/20 transition-all group"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
              {result ? 'Regenerate' : 'Generate Project Content'}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}